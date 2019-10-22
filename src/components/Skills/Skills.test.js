import React from 'react';
import { shallow } from 'enzyme';
import Skills from './Skills';

const mockSkills = ['react', 'js', 'css'];

describe('Card', () => {
  it('should render correctly', () => {
    const component = shallow(<Skills data={mockSkills} />);
    expect(component).toMatchSnapshot();
  });
});
