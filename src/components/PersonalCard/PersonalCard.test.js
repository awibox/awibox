import React from 'react';
import { shallow } from 'enzyme';
import { Map } from 'immutable';
import PersonalCard from './PersonalCard';

const testData = Map({
  avatar: 'https://avatars1.githubusercontent.com/u/1931010?s=460&v=4',
  position: 'Test position',
  location: 'Palo Alto',
  email: 'test@test.com',
  services: [
    {
      name: 'github',
      icon: 'github',
      link: 'https://github.com/',
      color: '#24292e',
    },
    {
      name: 'linkedin',
      icon: 'linkedin-square',
      link: 'https://linkedin.com/',
      color: '#0077B5',
    },
  ],
});

describe('Alert', () => {
  it('should render correctly', () => {
    const component = shallow(<PersonalCard data={testData}/>);
    expect(component).toMatchSnapshot();
  });
});
