import { createSelector } from 'reselect';
// selector
const getAuthorInfoState = (state) => state.author.authorInfo;
// reselect function
export const getAuthorInfoSelector = createSelector(
  [getAuthorInfoState],
  (authorInfo) => (authorInfo),
);
export const defaultAuthor = {};
