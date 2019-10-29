import { GET_AUTHOR_DATA, GET_AUTHOR_SERVICES } from 'actions/types';
import { List, Map } from 'immutable';

const initialState = {};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTHOR_DATA:
      return {
        ...state,
        authorInfo: Map(action.payload),
      };
    case GET_AUTHOR_SERVICES:
      return {
        ...state,
        authorServices: List(action.payload),
      };
    default:
      return state;
  }
};

export default profileReducer;
