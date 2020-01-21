import { GET_AUTHOR_DATA, GET_AUTHOR_SERVICES } from 'actions/types';
import { List, Map } from 'immutable';
import reducer from './authorReducer';

const mockAuthorInfo = Map({
  test: 'Test',
});
const mockAuthorServices = List([
  {
    test: 'Test',
  },
  {
    test2: 'Test2',
  },
]);

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
  it('should handle GET_AUTHOR_SERVICES', () => {
    const successAction = {
      type: GET_AUTHOR_SERVICES,
      payload: mockAuthorServices,
    };
    expect(reducer({}, successAction)).toEqual({
      authorServices: List(mockAuthorServices),
    });
  });
});
