import { createSelector } from 'reselect';
// selector
const getWorkDateState = (state) => state.profile.workData;
// reselect function
export const getWorkDataSelector = createSelector(
  [getWorkDateState],
  (workData) => (workData),
);

export default getWorkDataSelector;
