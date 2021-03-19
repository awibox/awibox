import React from 'react';
import { shallow } from 'enzyme';
import Github from './Github';

describe('Github', () => {
  it('should render correctly', () => {
    const component = shallow(<Github />);
    expect(component).toMatchSnapshot();
  });
});
