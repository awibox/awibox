import { combineReducers } from 'redux';
// Reducers
import errorReducer from './errorReducer';
import homeReducer from './homeReducer';

export default combineReducers({
  errors: errorReducer,
  homeState: homeReducer,
});
