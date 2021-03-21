import {
  GET_WORK_DATA,
  GET_WORK_SKILLS,
  GET_WORK_CERTIFICATES,
  GET_WORK_EXPERIENCE,
} from 'actions/types';
import {
  workData, workSkills, workCertificates, workExperience,
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

export const getWorkExperience = (data) => ({
  type: GET_WORK_EXPERIENCE,
  payload: data,
});

export const getWorkCertificates = (data) => ({
  type: GET_WORK_CERTIFICATES,
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

export const getWorkExperienceAction = () => (dispatch) => {
  try {
    const skills = workExperience();
    dispatch(getWorkExperience(skills));
  } catch (err) {
    dispatch(getError({
      message: 'Work Experience not found',
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

export const getWorkCertificatesAction = () => (dispatch) => {
  try {
    const certificates = workCertificates();
    dispatch(getWorkCertificates(certificates));
  } catch (err) {
    dispatch(getError({
      message: 'Work certificates not found',
    }));
  }
};
