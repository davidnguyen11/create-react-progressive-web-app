import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import tnwReducer from './containers/TheNextWeb/reducer';
import tcReducer from './containers/TechCrunch/reducer';
import atReducer from './containers/ArsTechnica/reducer';

export default combineReducers({
  routing: routerReducer,
  tnwReducer,
  tcReducer,
  atReducer,
});
