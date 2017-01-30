import 'babel-polyfill';

import 'sanitize.css/sanitize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import { applyMiddleware, createStore } from 'redux'
import ReactDOM from 'react-dom';
import { applyRouterMiddleware, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';
import { syncHistoryWithStore} from 'react-router-redux';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import reducer from './reducers';
import Routes from './routes';
import AppWrapper from 'components/AppWrapper';
import getNewsData from './containers/TheNextWeb/sagas';
import getTCNewsData from './containers/TechCrunch/sagas';
import getATNewsData from './containers/ArsTechnica/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

const history = syncHistoryWithStore(browserHistory, store);

const routerProps = {
  history,
  render: applyRouterMiddleware(useScroll()),
  rootComponent: AppWrapper,
};

// get saga based on route
const { routing: { locationBeforeTransitions } } = store.getState();
let saga = null;
if (locationBeforeTransitions) {
  const { pathname } = locationBeforeTransitions;
  switch (pathname) {
    case '/tnw': {
      saga = getNewsData;
    } break;
    case '/techcrunch': {
      saga = getTCNewsData;
    } break;
    case '/ars-technica': {
      saga = getATNewsData;
    } break;
    default:
      break;
  }
}
if (saga) {
  sagaMiddleware.run(saga);
}

ReactDOM.render(
  <Provider store={store}>
    <Routes {...routerProps} />
  </Provider>,
  document.getElementById('root')
);
