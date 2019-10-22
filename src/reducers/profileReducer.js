import { GET_WORK_DATA } from 'actions/types';
import { List } from 'immutable';

const initialState = {};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORK_DATA:
      return {
        ...state,
        workData: List(action.payload),
      };
    default:
      return state;
  }
};

export default profileReducer;
