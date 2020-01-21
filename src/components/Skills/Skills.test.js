import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'immutable';
import Skills from './Skills';

const mockSkills = List([
  { name: 'react' },
  { name: 'js' },
  { name: 'css' },
]);

describe('Card', () => {
  it('should render correctly', () => {
    const component = shallow(<Skills data={mockSkills} />);
    expect(component).toMatchSnapshot();
  });
});
