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

  componentDidMount() {
    this.props.getAuthorDataAction();
    document.addEventListener('mousemove', (e) => {
      const newValueX = (23 / window.innerWidth) * (e.pageX - (window.innerWidth / 2)) * -1;
      const newValueY = (23 / window.innerHeight) * (e.pageY - (window.innerHeight / 2)) * -1;
      const background = document.getElementsByClassName('lm-animated-bg');
      const backgroundClasses = background[0].classList;
      backgroundClasses.add('transition');
      background[0].style.backgroundPosition = `calc( 50% + ${newValueX}px ) calc( 50% + ${newValueY}px )`;
      setTimeout(() => {
        backgroundClasses.remove('transition');
      }, 300);
    });
  }

  render() {
    const { AuthorInfo } = this.props;
    return (
      <BrowserRouter>
        <Header data={AuthorInfo} />
        <div className={styles.contentArea}>
          <div className={styles.animatedSections}>
            <section data-id="home" className={styles.animatedSection}>
              <div className={styles.scrollbar}>
                <Routes />
              </div>
            </section>
          </div>
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
