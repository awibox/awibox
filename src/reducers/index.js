import { combineReducers } from 'redux';
// Reducers
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  errors: errorReducer,
  profile: profileReducer,
});
