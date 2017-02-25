import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import newsReducer from './containers/NewsListing/reducer';

export default combineReducers({
  routing: routerReducer,
  newsReducer,
});
