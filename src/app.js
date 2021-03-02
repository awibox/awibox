import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// Components
import Header from 'components/Header/Header';
// Styles
import styles from 'styles/container.scss';
import CookieConsent from 'react-cookie-consent-notification';
// Router
import Routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consentStatus: false,
    };
    this.checkStatus = this.checkStatus.bind(this);
  }

  checkStatus(consentStatus) {
    this.setState({ consentStatus });
  }

  render() {
    return (
      <BrowserRouter>
        <Header/>
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

export default App;
