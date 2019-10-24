import React from 'react';
import { shallow } from 'enzyme';
import Books from './Books';

const mockData = [
  {
    name: 'Name',
    author: 'Author',
    link: 'link',
  },
];

describe('Books', () => {
  it('should render correctly', () => {
    const component = shallow(<Books data={mockData} />);
    expect(component).toMatchSnapshot();
  });
});
