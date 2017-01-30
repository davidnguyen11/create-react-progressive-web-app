import React from 'react';
import { Router, Route } from 'react-router';

import TheNextWeb from './containers/TheNextWeb';
import TechCrunch from './containers/TechCrunch';
import ArsTechnica from './containers/ArsTechnica';
import HomePage from './containers/HomePage';
import NotFound from './containers/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route component={props.rootComponent}>
      <Route path="/" component={HomePage} />
      <Route path="/tnw" component={TheNextWeb} />
      <Route path="/techcrunch" component={TechCrunch} />
      <Route path="/ars-technica" component={ArsTechnica} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
