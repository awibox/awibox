import {
  GET_WORK_DATA,
  GET_WORK_SKILLS,
  GET_WORK_EXPERIENCE,
  GET_WORK_CERTIFICATES,
} from 'actions/types';
import { List } from 'immutable';

const initialState = {};

const profileReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_WORK_DATA:
      return {
        ...state,
        workData: List(action.payload),
      };
    case GET_WORK_SKILLS:
      return {
        ...state,
        workSkills: List(action.payload),
      };
    case GET_WORK_EXPERIENCE:
      return {
        ...state,
        workExperience: List(action.payload),
      };
    case GET_WORK_CERTIFICATES:
      return {
        ...state,
        workCertificates: List(action.payload),
      };
    default:
      return state;
  }
};

export default profileReducer;
