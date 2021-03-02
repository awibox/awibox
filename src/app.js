import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map } from 'immutable';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import Header from 'components/Header/Header';
import CookieConsent from 'react-cookie-consent-notification';
// Styles
import styles from 'styles/container.scss';
// Router
import Routes from './routes';
// Selectors
import { getAuthorInfoSelector } from './selectors/authorSelectors';
import { getAuthorDataAction } from './actions/authorActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consentStatus: false,
    };
    this.checkStatus = this.checkStatus.bind(this);
  }

  static propTypes = {
    getAuthorDataAction: PropTypes.func.isRequired,
    AuthorInfo: ImmutablePropTypes.map,
  };

  static defaultProps = {
    AuthorInfo: Map({
      avatar: '',
    }),
  };

  checkStatus(consentStatus) {
    this.setState({ consentStatus });
  }

  render() {
    const { AuthorInfo } = this.props;

    return (
      <BrowserRouter>
        <Header data={AuthorInfo} />
        <div className={styles.contentArea}>
          <Routes />
        </div>
        <CookieConsent
          background={'#0079c1'}
          bottomPosition={false}
          buttonText={'I agree'}
          buttonBackground={'#fff'}
          buttonColor={'#000'}
          buttonFontSize={14}
          color={'#fff'}
          consentFunction={this.checkStatus}
          padding={20}
        >
          This website uses cookies for analytical purposes.
          Please read our <a href={'/cookie-policy'} style={{ color: '#fff' }}>Cookie Policy</a> and confirm your consent to the use of cookies.
        </CookieConsent>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  AuthorInfo: getAuthorInfoSelector(state),
});

const mapDispatchToProps = {
  getAuthorDataAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
