import { GET_AUTHOR_DATA } from 'actions/types';
import { Map } from 'immutable';

const initialState = {};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTHOR_DATA:
      return {
        ...state,
        authorInfo: Map(action.payload),
      };
    default:
      return state;
  }
};

export default profileReducer;
