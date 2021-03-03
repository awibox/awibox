import { createSelector } from 'reselect';
// selector
const getWorkDataState = (state) => state.profile.workData;
const getWorkSkillsState = (state) => state.profile.workSkills;
const getWorkBooksState = (state) => state.profile.workBooks;
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
export const getWorkBooksSelector = createSelector(
  [getWorkBooksState],
  (workBooks) => (workBooks),
);
export const getWorkCertificatesSelector = createSelector(
  [getWorkCertificatesState],
  (workCertificates) => (workCertificates),
);
