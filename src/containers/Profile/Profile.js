import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { getWorkDataAction } from 'actions/profileActions';
import { List } from 'immutable';
// Components
import Alert from 'components/Alert/Alert';
import Loader from 'components/Loader/Loader';
import Timeline from 'components/Timeline/Timeline';
import Title from 'components/Title/Title';
// Selectors
import { getWorkDataSelector } from 'selectors/profileSelectors';
import { getErrorsSelector } from 'selectors/errorSelectors';
// Styles
import styles from './Profile.scss';

class ProfileContainer extends Component {
  static propTypes = {
    getWorkDataAction: PropTypes.func.isRequired,
    workData: ImmutablePropTypes.any,
    errors: PropTypes.shape({
      message: PropTypes.string,
    }),
  };

  static defaultProps = {
    workData: List([]),
  };

  componentDidMount() {
    this.props.getWorkDataAction();
  }

  render() {
    const { workData, errors } = this.props;
    return (
      <div>
        {typeof errors.message !== 'undefined' && <Alert>{errors.message}</Alert>}
        <Title>Profile</Title>
        <div className={styles.workPart}>
          <div className={styles.workPartItem}>
            <Timeline title='WORK HISTORY' data={workData} />
          </div>
        </div>
        <Loader/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  workData: getWorkDataSelector(state),
  errors: getErrorsSelector(state),
});

export default connect(mapStateToProps, { getWorkDataAction })(ProfileContainer);
