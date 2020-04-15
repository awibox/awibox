import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-promise-loader';
import {
  getWorkDataAction,
  getWorkSkillsAction,
  getWorkBooksAction,
} from 'actions/profileActions';
import { getAuthorDataAction } from 'actions/authorActions';
// Components
import { Alert, Card } from 'tigerspack';
import Books from 'components/Books/Books';
import PersonalCard from 'components/PersonalCard/PersonalCard';
import Skills from 'components/Skills/Skills';
import Title from 'components/Title/Title';
// Selectors
import {
  getWorkDataSelector,
  getWorkSkillsSelector,
  getWorkBooksSelector,
} from 'selectors/profileSelectors';
import { getErrorsSelector } from 'selectors/errorSelectors';
import { getAuthorInfoSelector } from 'selectors/authorSelectors';
import EventsTimeline from 'react-events-timeline';
import 'react-events-timeline/dist/main.css';
// Styles
import styles from './Profile.scss';


class ProfileContainer extends Component {
  static propTypes = {
    getWorkDataAction: PropTypes.func.isRequired,
    getWorkSkillsAction: PropTypes.func.isRequired,
    getWorkBooksAction: PropTypes.func.isRequired,
    getAuthorDataAction: PropTypes.func.isRequired,
    AuthorInfo: ImmutablePropTypes.map,
    workData: ImmutablePropTypes.list,
    workSkills: ImmutablePropTypes.list,
    workBooks: ImmutablePropTypes.list,
    errors: PropTypes.shape({
      message: PropTypes.string,
    }),
  };

  static defaultProps = {
    workData: List([]),
    workSkills: List([]),
    workBooks: List([]),
    AuthorInfo: Map({
      avatar: '',
    }),
  };

  componentDidMount() {
    this.props.getWorkDataAction();
    this.props.getWorkSkillsAction();
    this.props.getWorkBooksAction();
    this.props.getAuthorDataAction();
  }

  render() {
    const {
      AuthorInfo,
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
          <Card outline className={styles.personalCardMobile} title='Andrei Arkhipov' icon={<i className={'fa fa-id-card'}/>}>
            <PersonalCard data={AuthorInfo}/>
          </Card>
          <div className={styles.workPartHistory}>
            <EventsTimeline title='WORK HISTORY' icon={<i className='fa fa-briefcase'/>} color='blue' data={workData}/>
          </div>
          <div className={styles.workPartBlocks}>
            <Card outline className={styles.personalCardDesktop} title='Andrei Arkhipov' icon={<i className={'fa fa-id-card'}/>}>
              <PersonalCard data={AuthorInfo}/>
            </Card>
            <Card outline title='my favorite books' icon={<i className={'fa fa-book'}/>} withoutContainer>
              <Books data={workBooks}/>
            </Card>
            <Card outline title='DEVELOPMENT SKILLS' icon={<i className={'fa fa-magic'}/>}>
              <Skills data={workSkills}/>
            </Card>
          </div>
        </div>
        <Loader promiseTracker={usePromiseTracker} color={'#3d5e61'} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  workData: getWorkDataSelector(state),
  workSkills: getWorkSkillsSelector(state),
  workBooks: getWorkBooksSelector(state),
  AuthorInfo: getAuthorInfoSelector(state),
  errors: getErrorsSelector(state),
});

const mapDispatchToProps = {
  getWorkDataAction,
  getWorkSkillsAction,
  getWorkBooksAction,
  getAuthorDataAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
