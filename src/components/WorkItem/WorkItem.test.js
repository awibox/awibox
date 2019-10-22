import React from 'react';
import { shallow } from 'enzyme';
import WorkItem from './WorkItem';

const mockData = {
  position: 'Engineer',
  company: 'Company',
  location: 'Moscow',
  description: 'Description',
};

describe('Timeline', () => {
  it('should render correctly', () => {
    const component = shallow(<WorkItem title='Test timeline' data={mockData} />);
    expect(component).toMatchSnapshot();
  });
});
