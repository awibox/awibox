import { GET_WORK_DATA } from 'actions/types';
import workData from 'data/workData';
import { getError } from './errorActions';

export const getWorkData = (data) => ({
  type: GET_WORK_DATA,
  payload: data,
});

export const getWorkDataAction = () => (dispatch) => {
  try {
    const data = workData();
    dispatch(getWorkData(data));
  } catch (err) {
    dispatch(getError({
      message: 'Work data not found',
    }));
  }
};
