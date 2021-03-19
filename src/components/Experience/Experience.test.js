import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'immutable';
import Experience from './Experience';

const mockSkills = List([
  {
    name: 'React',
    years: 4,
    percentage: 85,
  },
  {
    name: 'Angular',
    years: 7,
    percentage: 75,
  },
  {
    name: 'TypeScript',
    years: 6,
    percentage: 70,
  },
]);

describe('Experience', () => {
  it('should render correctly', () => {
    const component = shallow(<Experience data={mockSkills} />);
    expect(component).toMatchSnapshot();
  });
});
