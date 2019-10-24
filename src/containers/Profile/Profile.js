import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import {
  getWorkDataAction,
  getWorkSkillsAction,
  getWorkBooksAction,
  getWorkProfileAction,
} from 'actions/profileActions';
// Components
import Alert from 'components/Alert/Alert';
import Books from 'components/Books/Books';
import Card from 'components/Card/Card';
import Loader from 'components/Loader/Loader';
import PersonalCard from 'components/PersonalCard/PersonalCard';
import Skills from 'components/Skills/Skills';
import Timeline from 'components/Timeline/Timeline';
import Title from 'components/Title/Title';
// Selectors
import {
  getWorkDataSelector,
  getWorkSkillsSelector,
  getWorkBooksSelector,
  getWorkProfileSelector,
} from 'selectors/profileSelectors';
import { getErrorsSelector } from 'selectors/errorSelectors';
// Styles
import styles from './Profile.scss';


class ProfileContainer extends Component {
  static propTypes = {
    getWorkDataAction: PropTypes.func.isRequired,
    getWorkSkillsAction: PropTypes.func.isRequired,
    getWorkBooksAction: PropTypes.func.isRequired,
    getWorkProfileAction: PropTypes.func.isRequired,
    workData: ImmutablePropTypes.any,
    workSkills: PropTypes.array,
    workBooks: PropTypes.array,
    workProfile: ImmutablePropTypes.map,
    errors: PropTypes.shape({
      message: PropTypes.string,
    }),
  };

  static defaultProps = {
    workData: List([]),
    workSkills: [],
    workBooks: [],
    workProfile: Map({
      github: '',
    }),
  };

  componentDidMount() {
    this.props.getWorkDataAction();
    this.props.getWorkSkillsAction();
    this.props.getWorkBooksAction();
    this.props.getWorkProfileAction();
  }

  render() {
    const {
      workData,
      workSkills,
      workBooks,
      workProfile,
      errors,
    } = this.props;

    return (
      <div>
        {typeof errors.message !== 'undefined' && <Alert>{errors.message}</Alert>}
        <Title>Profile</Title>
        <div className={styles.workPart}>
          <div className={styles.workPartHistory}>
            <Timeline title='WORK HISTORY' icon='briefcase' color='blue' data={workData}/>
          </div>
          <div className={styles.workPartBlocks}>
            <Card title='Andrei Arkhipov' color='blue' icon='id-card'>
              <PersonalCard data={workProfile}/>
            </Card>
            <Card title='DEVELOPMENT SKILLS' color='blue' icon='magic'>
              <Skills data={workSkills}/>
            </Card>
            <Card title='DEVELOPMENT BOOKS' color='blue' icon='book' withoutContainer>
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
  workProfile: getWorkProfileSelector(state),
  errors: getErrorsSelector(state),
});

const mapDispatchToProps = {
  getWorkDataAction,
  getWorkSkillsAction,
  getWorkBooksAction,
  getWorkProfileAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
