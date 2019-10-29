import { GET_AUTHOR_DATA, GET_AUTHOR_SERVICES } from 'actions/types';
import { author, services } from 'data/authorData';
import { getError } from './errorActions';

export const getAuthorData = (data) => ({
  type: GET_AUTHOR_DATA,
  payload: data,
});

export const getAuthorServices = (data) => ({
  type: GET_AUTHOR_SERVICES,
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

export const getAuthorServicesAction = () => (dispatch) => {
  try {
    const data = services();
    dispatch(getAuthorServices(data));
  } catch (err) {
    dispatch(getError({
      message: 'Author social networks not found',
    }));
  }
};
