import React from 'react';
import { Router, Route } from 'react-router';
import {
  fetchData
} from './containers/NewsListing/actions';
import AppWrapper from './containers/AppWrapper';
import NewsListing from './containers/NewsListing';
import HomePage from './containers/HomePage';
import NotFound from './containers/NotFound';

const Routes = (props) => {
  const { store } = props;

  const getDataNews = (nextState, replace, cb) => {
    console.log('nextState', nextState);
    const { params: { source } } = nextState;
    store.dispatch(fetchData(source));
    cb();
  };

  return (
    <Router {...props}>
      <Route component={AppWrapper}>
        <Route path="/" component={HomePage} />
        <Route path="/:source" onEnter={getDataNews} component={NewsListing} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  )
};

export default Routes;
