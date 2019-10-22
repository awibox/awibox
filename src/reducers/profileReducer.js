import { GET_WORK_DATA, GET_WORK_SKILLS } from 'actions/types';
import { List } from 'immutable';

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
    default:
      return state;
  }
};

export default profileReducer;
