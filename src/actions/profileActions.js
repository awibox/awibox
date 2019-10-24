import {
  GET_WORK_DATA,
  GET_WORK_SKILLS,
  GET_WORK_BOOKS,
  GET_WORK_PROFILE,
} from 'actions/types';
import {
  workData, workSkills, workBooks, workProfile,
} from 'data/workData';
import { getError } from './errorActions';

export const getWorkData = (data) => ({
  type: GET_WORK_DATA,
  payload: data,
});

export const getWorkSkills = (data) => ({
  type: GET_WORK_SKILLS,
  payload: data,
});

export const getWorkBooks = (data) => ({
  type: GET_WORK_BOOKS,
  payload: data,
});

export const getWorkProfile = (data) => ({
  type: GET_WORK_PROFILE,
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

export const getWorkSkillsAction = () => (dispatch) => {
  try {
    const skills = workSkills();
    dispatch(getWorkSkills(skills));
  } catch (err) {
    dispatch(getError({
      message: 'Work skills not found',
    }));
  }
};

export const getWorkBooksAction = () => (dispatch) => {
  try {
    const books = workBooks();
    dispatch(getWorkBooks(books));
  } catch (err) {
    dispatch(getError({
      message: 'Work books not found',
    }));
  }
};

export const getWorkProfileAction = () => (dispatch) => {
  try {
    const profile = workProfile();
    dispatch(getWorkProfile(profile));
  } catch (err) {
    dispatch(getError({
      message: 'Work profile not found',
    }));
  }
};
