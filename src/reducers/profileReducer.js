import {
  GET_WORK_DATA,
  GET_WORK_SKILLS,
  GET_WORK_BOOKS,
  GET_WORK_PROFILE,
} from 'actions/types';
import { List, Map } from 'immutable';

const initialState = {};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORK_DATA:
      return {
        ...state,
        workData: List(action.payload),
      };
    case GET_WORK_SKILLS:
      return {
        ...state,
        workSkills: action.payload,
      };
    case GET_WORK_BOOKS:
      return {
        ...state,
        workBooks: List(action.payload),
      };
    case GET_WORK_PROFILE:
      return {
        ...state,
        workProfile: Map(action.payload),
      };
    default:
      return state;
  }
};

export default profileReducer;
