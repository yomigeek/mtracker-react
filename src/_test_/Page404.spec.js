import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Page404 from '../components/Page404';

Enzyme.configure({ adapter: new Adapter() });

// PageError Test
describe('>>>PAGE 404 COMPONENT', () => {
  let wrapper;
  // Jest beforeEach()
  beforeEach(() => {
    wrapper = shallow(<Page404 />);
  });
  it('component should exist', () => {
    expect(wrapper).toBeTruthy();
  });
});
