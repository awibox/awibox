import { GET_AUTHOR_DATA } from 'actions/types';
import author from 'data/authorData';
import { getError } from './errorActions';

export const getAuthorData = (data) => ({
  type: GET_AUTHOR_DATA,
  payload: data,
});

export const getAuthorDataAction = () => (dispatch) => {
  try {
    const data = author();
    dispatch(getAuthorData(data));
  } catch (err) {
    dispatch(getError({
      message: 'Author data not found',
    }));
  }
};
