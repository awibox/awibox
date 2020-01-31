import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
// Pages
import ProfileContainer from 'containers/Profile/Profile';
import NotFound from 'pages/NotFound/NotFound';
import CookiePolicy from 'pages/CookiePolicy/CookiePolicy';
// Styles
import styles from 'styles/container.scss';
import CookieConsent from 'react-cookie-consent-notification';

class RouterComponent extends Component {
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
      <Router>
        <div className={styles.app}>
          <Header/>
          <main className={styles.content}>
            <div className={styles.wrapper}>
              <Switch>
                <Route exact path="/" component={ProfileContainer}/>
                <Route exact path="/cookie-policy" component={CookiePolicy}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </main>
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
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default RouterComponent;
