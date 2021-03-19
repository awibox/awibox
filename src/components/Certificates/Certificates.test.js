import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'immutable';
import Certificates from './Certificates';

const workCertificates = List([
  {
    name: 'JavaScript',
    id: 'F510F1E6D375',
    date: 'Apr 2020',
    company: 'Hacker Rank',
    logo: 'img/hacker-rank.jpeg',
    link: 'https://www.hackerrank.com/certificates/',
  },
  {
    name: 'React',
    id: '8DABF8164735',
    date: 'Apr 2020',
    company: 'Hacker Rank',
    logo: 'img/hacker-rank.jpeg',
    link: 'https://www.hackerrank.com/certificates/',
  },
]);

describe('Certificates', () => {
  it('should render correctly', () => {
    const component = shallow(<Certificates data={workCertificates} />);
    expect(component).toMatchSnapshot();
  });
});
