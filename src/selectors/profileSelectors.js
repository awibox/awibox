import { createSelector } from 'reselect';
// selector
const getWorkDataState = (state) => state.profile.workData;
const getWorkSkillsState = (state) => state.profile.workSkills;
const getWorkExperienceState = (state) => state.profile.workExperience;
const getWorkCertificatesState = (state) => state.profile.workCertificates;
// reselect function
export const getWorkDataSelector = createSelector(
  [getWorkDataState],
  (workData) => (workData),
);
export const getWorkSkillsSelector = createSelector(
  [getWorkSkillsState],
  (workSkills) => (workSkills),
);
export const getWorkExperienceSelector = createSelector(
  [getWorkExperienceState],
  (workExperience) => (workExperience),
);
export const getWorkCertificatesSelector = createSelector(
  [getWorkCertificatesState],
  (workCertificates) => (workCertificates),
);
