import { createSelector } from 'reselect';
// selector
const getWorkDateState = (state) => state.profile.workData;
const getWorkSkillsState = (state) => state.profile.workSkills;
// reselect function
export const getWorkDataSelector = createSelector(
  [getWorkDateState],
  (workData) => (workData),
);
export const getWorkSkillsSelector = createSelector(
  [getWorkSkillsState],
  (workSkills) => (workSkills),
);
