import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import Header from 'components/Header/Header';
// Pages
import HomeContainer from 'pages/Home/Home';
import NotFound from 'pages/NotFound/NotFound';
// Styles
import styles from 'styles/container.scss';

export const routes = {};

const RouterComponent = () => (
  <Router>
    <div className="app">
      <Header/>
      <main className={styles.content}>
        <div className={styles.wrapper}>
          <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </main>
    </div>
  </Router>
);
export default RouterComponent;
