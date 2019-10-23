import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { getWorkDataAction, getWorkSkillsAction } from 'actions/profileActions';
import { List } from 'immutable';
import classNames from 'classnames';
// Components
import Alert from 'components/Alert/Alert';
import Loader from 'components/Loader/Loader';
import Timeline from 'components/Timeline/Timeline';
import Title from 'components/Title/Title';
import Card from 'components/Card/Card';
import Skills from 'components/Skills/Skills';
// Selectors
import { getWorkDataSelector, getWorkSkillsSelector } from 'selectors/profileSelectors';
import { getErrorsSelector } from 'selectors/errorSelectors';
// Styles
import styles from './Profile.scss';

class ProfileContainer extends Component {
  static propTypes = {
    getWorkDataAction: PropTypes.func.isRequired,
    getWorkSkillsAction: PropTypes.func.isRequired,
    workData: ImmutablePropTypes.any,
    workSkills: PropTypes.array,
    errors: PropTypes.shape({
      message: PropTypes.string,
    }),
  };

  static defaultProps = {
    workData: List([]),
    workSkills: [],
  };

  componentDidMount() {
    this.props.getWorkDataAction();
    this.props.getWorkSkillsAction();
  }

  render() {
    const { workData, workSkills, errors } = this.props;
    return (
      <div>
        {typeof errors.message !== 'undefined' && <Alert>{errors.message}</Alert>}
        <Title>Profile</Title>
        <div className={styles.workPart}>
          <div className={styles.workPartItem}>
            <Timeline title='WORK HISTORY' icon='briefcase' data={workData} />
          </div>
          <div className={classNames(styles.workPartItem, styles.blocksIndent)}>
            <Card title="Work Skills" color="orange">
              <Skills data={workSkills} />
            </Card>
          </div>
        </div>
        <Loader/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  workData: getWorkDataSelector(state),
  workSkills: getWorkSkillsSelector(state),
  errors: getErrorsSelector(state),
});

const mapDispatchToProps = {
  getWorkDataAction,
  getWorkSkillsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
