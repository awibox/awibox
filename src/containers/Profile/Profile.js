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
  getWorkBooksAction,
  getWorkCertificatesAction,
} from 'actions/profileActions';
// Components
import Title from 'components/Title/Title';
import Github from 'components/Github/Github';
// Selectors
import {
  getWorkDataSelector,
  getWorkSkillsSelector,
  getWorkBooksSelector,
  getWorkCertificatesSelector,
} from 'selectors/profileSelectors';
import { getErrorsSelector } from 'selectors/errorSelectors';
import Timeline from '../../components/Timeline/Timeline';
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
    getWorkBooksAction: PropTypes.func.isRequired,
    getWorkCertificatesAction: PropTypes.func.isRequired,
    getAuthorDataAction: PropTypes.func.isRequired,
    AuthorInfo: ImmutablePropTypes.map,
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
    AuthorInfo: Map({
      avatar: '',
    }),
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
      AuthorInfo,
      errors,
    } = this.props;
    return (
      <>
        <Title>About <span>me</span></Title>
        <div className="row">
          <div className="col-xs-12 col-md-7">
            <div className={styles.description}>
              {AuthorInfo.get('aboutMe')}
            </div>
          </div>
          <div className="col-xs-12 col-md-5">
            <div className={styles.infoList}>
              <ul>
                <li>
                  <span className={styles.title}>Name</span>
                  <span className="value">{AuthorInfo.get('name')}</span>
                </li>

                <li>
                  <span className={styles.title}>Location</span>
                  <span className="value">{AuthorInfo.get('location')}</span>
                </li>

                <li>
                  <span className={styles.title}>E-mail</span>
                  <span className="value">{AuthorInfo.get('email')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {typeof errors.message !== 'undefined' && errors.message}
        <div className="section-content">
          <Title subtitle>Experience</Title>
          <Timeline data={workData} />
          <Title subtitle>My <span>skills</span></Title>
          <Skills data={workSkills} />
          <Title subtitle>Github <span>Stats</span></Title>
          <Github />
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
  workBooks: getWorkBooksSelector(state),
  workCertificates: getWorkCertificatesSelector(state),
  errors: getErrorsSelector(state),
  AuthorInfo: getAuthorInfoSelector(state),
});

const mapDispatchToProps = {
  getWorkDataAction,
  getWorkSkillsAction,
  getWorkBooksAction,
  getWorkCertificatesAction,
  getAuthorDataAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
