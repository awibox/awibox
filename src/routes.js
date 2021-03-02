import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Pages
import ProfileContainer from './containers/Profile/Profile';
import CookiePolicy from './pages/CookiePolicy/CookiePolicy';
import Branding from './pages/Branding/Branding';
import NotFound from './pages/NotFound/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ProfileContainer}/>
    <Route exact path="/cookie-policy" component={CookiePolicy}/>
    <Route exact path="/branding" component={Branding}/>
    <Route component={NotFound}/>
  </Switch>
);

export default Routes;
