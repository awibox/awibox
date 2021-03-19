import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'immutable';
import Timeline from './Timeline';

const workData = List([
  {
    date: '2019 - Current',
    title: 'Lead Software Engineer',
    label: 'Com1',
    location: 'Saint Petersburg (Russia)',
    content: 'Text',
  },
  {
    date: '2010 - 2018',
    title: 'Lead Software Engineer',
    label: 'Com2',
    location: 'Saint Petersburg (Russia)',
    content: 'Text',
  },
]);

describe('Timeline', () => {
  it('should render correctly', () => {
    const component = shallow(<Timeline data={workData} />);
    expect(component).toMatchSnapshot();
  });
});
