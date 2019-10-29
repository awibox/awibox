import { combineReducers } from 'redux';
// Reducers
import authorReducer from './authorReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  author: authorReducer,
  errors: errorReducer,
  profile: profileReducer,
});
