import { GET_AUTHOR_DATA } from 'actions/types';
import { Map } from 'immutable';
import reducer from './authorReducer';

const mockAuthorInfo = Map({
  test: 'Test',
});

describe('profile reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
  it('should handle GET_AUTHOR_DATA', () => {
    const successAction = {
      type: GET_AUTHOR_DATA,
      payload: mockAuthorInfo,
    };
    expect(reducer({}, successAction)).toEqual({
      authorInfo: Map(mockAuthorInfo),
    });
  });
});
