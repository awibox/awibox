import React from 'react';
import { shallow } from 'enzyme';
import Timeline from './Timeline';

const mockData = [
  {
    year: 2018,
    type:
      'work',
    content:
      {
        position: 'Engineer',
        company:
          'Company',
        location:
          'Moscow',
        description:
          'Description',
      },
  },
];

describe('Timeline', () => {
  it('should render correctly', () => {
    const component = shallow(<Timeline title='Test timeline' data={mockData}/>);
    expect(component).toMatchSnapshot();
  });
});
