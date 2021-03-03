import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-promise-loader';
import {
  getWorkDataAction,
  getWorkSkillsAction,
  getWorkBooksAction,
  getWorkCertificatesAction,
} from 'actions/profileActions';
// Components
import { Alert } from 'tigerspack';
import Title from 'components/Title/Title';
// Selectors
import {
  getWorkDataSelector,
  getWorkSkillsSelector,
  getWorkBooksSelector,
  getWorkCertificatesSelector,
} from 'selectors/profileSelectors';
import { getErrorsSelector } from 'selectors/errorSelectors';
import 'react-events-timeline/dist/main.css';
import Timeline from '../../components/Timeline/Timeline';
import Skills from '../../components/Skills/Skills';
import Certificates from '../../components/Certificates/Certificates';
// Styles
// import styles from './Profile.scss';


class ProfileContainer extends Component {
  static propTypes = {
    getWorkDataAction: PropTypes.func.isRequired,
    getWorkSkillsAction: PropTypes.func.isRequired,
    getWorkBooksAction: PropTypes.func.isRequired,
    getWorkCertificatesAction: PropTypes.func.isRequired,
    workData: ImmutablePropTypes.list,
    workSkills: ImmutablePropTypes.list,
    workBooks: ImmutablePropTypes.list,
    workCertificates: ImmutablePropTypes.list,
    errors: PropTypes.shape({
      message: PropTypes.string,
    }),
  };

  static defaultProps = {
    workData: List([]),
    workSkills: List([]),
    workBooks: List([]),
    workCertificates: List([]),
  };

  componentDidMount() {
    this.props.getWorkDataAction();
    this.props.getWorkSkillsAction();
    this.props.getWorkBooksAction();
    this.props.getWorkCertificatesAction();
  }

  render() {
    const {
      workData,
      workSkills,
      // workBooks,
      workCertificates,
      errors,
    } = this.props;
    return (
      <div>
        <Title>Resume</Title>
        {typeof errors.message !== 'undefined' && <Alert>{errors.message}</Alert>}
        <div className="section-content">
          <Title subtitle>Experience</Title>
          <Timeline data={workData} />
          <Title subtitle>My <span>skills</span></Title>
          <Skills data={workSkills} />
          <Title subtitle>Certificates</Title>
          <Certificates data={workCertificates} />
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
  workCertificates: getWorkCertificatesSelector(state),
  errors: getErrorsSelector(state),
});

const mapDispatchToProps = {
  getWorkDataAction,
  getWorkSkillsAction,
  getWorkBooksAction,
  getWorkCertificatesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
