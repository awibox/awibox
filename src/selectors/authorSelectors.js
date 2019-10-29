import { createSelector } from 'reselect';
// selector
const getAuthorInfoState = (state) => state.author.authorInfo;
const getAuthorServicesState = (state) => state.author.authorServices;
// reselect function
export const getAuthorInfoSelector = createSelector(
  [getAuthorInfoState],
  (authorInfo) => (authorInfo),
);
export const getAuthorServicesSelector = createSelector(
  [getAuthorServicesState],
  (authorServices) => (authorServices),
);
