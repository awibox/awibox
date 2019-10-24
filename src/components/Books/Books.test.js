import React from 'react';
import { shallow } from 'enzyme';
import Books from './Books';

const mockData = [
  {
    name: 'Name',
    link: 'link',
  },
];

describe('Books', () => {
  it('should render correctly', () => {
    const component = shallow(<Books data={mockData} />);
    expect(component).toMatchSnapshot();
  });
});
