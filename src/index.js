import 'babel-polyfill';
require('offline-js');

import 'sanitize.css/sanitize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { applyRouterMiddleware, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';
import { syncHistoryWithStore} from 'react-router-redux';
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import reducer from './reducers';
import Routes from './routes';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

const history = syncHistoryWithStore(browserHistory, store);

const routerProps = {
  history,
  render: applyRouterMiddleware(useScroll()),
  store,
};

ReactDOM.render(
  <Provider store={store}>
    <Routes {...routerProps} />
  </Provider>,
  document.getElementById('root')
);
