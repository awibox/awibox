import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Loader', () => {
  it('should render correctly', () => {
    const component = shallow(<Footer/>);
    expect(component).toMatchSnapshot();
  });
});
