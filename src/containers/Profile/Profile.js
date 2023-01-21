import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-promise-loader';
import {
  getWorkDataAction,
  getWorkSkillsAction,
  getWorkExperienceAction,
  getWorkCertificatesAction,
} from 'actions/profileActions';
// Components
import Title from 'components/Title/Title';
// Selectors
import {
  getWorkDataSelector,
  getWorkSkillsSelector,
  getWorkExperienceSelector,
  getWorkCertificatesSelector,
} from 'selectors/profileSelectors';
import { getErrorsSelector } from 'selectors/errorSelectors';
import Timeline from '../../components/Timeline/Timeline';
import Experience from '../../components/Experience/Experience';
import Skills from '../../components/Skills/Skills';
import Certificates from '../../components/Certificates/Certificates';
// Styles
import styles from './Profile.scss';
import { getAuthorInfoSelector } from '../../selectors/authorSelectors';
import { getAuthorDataAction } from '../../actions/authorActions';

class ProfileContainer extends Component {
  static propTypes = {
    getWorkDataAction: PropTypes.func.isRequired,
    getWorkSkillsAction: PropTypes.func.isRequired,
    getWorkExperienceAction: PropTypes.func.isRequired,
    getWorkCertificatesAction: PropTypes.func.isRequired,
    getAuthorDataAction: PropTypes.func.isRequired,
    AuthorInfo: ImmutablePropTypes.map,
    workData: ImmutablePropTypes.list,
    workSkills: ImmutablePropTypes.list,
    workExperience: ImmutablePropTypes.list,
    workCertificates: ImmutablePropTypes.list,
    errors: PropTypes.shape({
      message: PropTypes.string,
    }),
  };

  static defaultProps = {
    workData: List([]),
    workSkills: List([]),
    workExperience: List([]),
    workCertificates: List([]),
    AuthorInfo: Map({
      avatar: '',
    }),
  };

  componentDidMount() {
    this.props.getWorkDataAction();
    this.props.getWorkSkillsAction();
    this.props.getWorkExperienceAction();
    this.props.getWorkCertificatesAction();
  }

  render() {
    const {
      workData,
      workSkills,
      workExperience,
      workCertificates,
      AuthorInfo,
      errors,
    } = this.props;
    return (
      <>
        <Title>About <span>me</span></Title>
        <div className="row">
          <div className="col-xs-12">
            <div className={styles.description}>
              {AuthorInfo.get('aboutMe')}
            </div>
          </div>
        </div>
        {typeof errors.message !== 'undefined' && errors.message}
        <div className="section-content">
          <Title subtitle>Experience</Title>
          <Timeline data={workData} />
          <Title subtitle>Experience</Title>
          <Experience data={workExperience} />
          <Title subtitle>Skills</Title>
          <Skills data={workSkills} />
          <Title subtitle>Certificates</Title>
          <Certificates data={workCertificates} />
        </div>
        <Loader promiseTracker={usePromiseTracker} color={'#3d5e61'} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  workData: getWorkDataSelector(state),
  workSkills: getWorkSkillsSelector(state),
  workExperience: getWorkExperienceSelector(state),
  workCertificates: getWorkCertificatesSelector(state),
  errors: getErrorsSelector(state),
  AuthorInfo: getAuthorInfoSelector(state),
});

const mapDispatchToProps = {
  getWorkDataAction,
  getWorkExperienceAction,
  getWorkSkillsAction,
  getWorkCertificatesAction,
  getAuthorDataAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
