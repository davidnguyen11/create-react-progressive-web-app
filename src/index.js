import 'babel-polyfill';
import 'offline-js';

import 'sanitize.css/sanitize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import reducer from './reducers';
import sagas from './sagas';
import Routes from './routes';

import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReactDOM from 'react-dom';
import { applyRouterMiddleware, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';
import { syncHistoryWithStore} from 'react-router-redux';
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);

// Begin our Index Saga
sagaMiddleware.run(sagas);

// sync history
const history = syncHistoryWithStore(browserHistory, store);

const routerProps = {
  history,
  render: applyRouterMiddleware(useScroll()),
  store,
  sagas,
};

ReactDOM.render(
  <Provider store={store}>
    <Routes {...routerProps} />
  </Provider>,
  document.getElementById('root')
);
