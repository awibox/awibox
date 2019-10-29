import { createSelector } from 'reselect';
// selector
const getWorkDataState = (state) => state.profile.workData;
const getWorkSkillsState = (state) => state.profile.workSkills;
const getWorkBooksState = (state) => state.profile.workBooks;
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
