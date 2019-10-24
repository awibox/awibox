import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import {
  getWorkDataAction,
  getWorkSkillsAction,
  getWorkBooksAction,
} from 'actions/profileActions';
import { List } from 'immutable';
// Components
import Alert from 'components/Alert/Alert';
import Loader from 'components/Loader/Loader';
import Timeline from 'components/Timeline/Timeline';
import Title from 'components/Title/Title';
import Card from 'components/Card/Card';
import Skills from 'components/Skills/Skills';
// Selectors
import {
  getWorkDataSelector,
  getWorkSkillsSelector,
  getWorkBooksSelector,
} from 'selectors/profileSelectors';
import { getErrorsSelector } from 'selectors/errorSelectors';
// Styles
import Books from 'components/Books/Books';
import styles from './Profile.scss';

class ProfileContainer extends Component {
  static propTypes = {
    getWorkDataAction: PropTypes.func.isRequired,
    getWorkSkillsAction: PropTypes.func.isRequired,
    getWorkBooksAction: PropTypes.func.isRequired,
    workData: ImmutablePropTypes.any,
    workSkills: PropTypes.array,
    workBooks: PropTypes.array,
    errors: PropTypes.shape({
      message: PropTypes.string,
    }),
  };

  static defaultProps = {
    workData: List([]),
    workSkills: [],
    workBooks: [],
  };

  componentDidMount() {
    this.props.getWorkDataAction();
    this.props.getWorkSkillsAction();
    this.props.getWorkBooksAction();
  }

  render() {
    const {
      workData,
      workSkills,
      workBooks,
      errors,
    } = this.props;

    return (
      <div>
        {typeof errors.message !== 'undefined' && <Alert>{errors.message}</Alert>}
        <Title>Profile</Title>
        <div className={styles.workPart}>
          <div className={styles.workPartHistory}>
            <Timeline title='WORK HISTORY' icon='briefcase' data={workData}/>
          </div>
          <div className={styles.workPartBlocks}>
            <Card title="DEVELOPMENT SKILLS" color="orange">
              <Skills data={workSkills}/>
            </Card>
            <Card title="DEVELOPMENT BOOKS" color="blue" withoutContainer>
              <Books data={workBooks}/>
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
  workBooks: getWorkBooksSelector(state),
  errors: getErrorsSelector(state),
});

const mapDispatchToProps = {
  getWorkDataAction,
  getWorkSkillsAction,
  getWorkBooksAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
