import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Aux from '../hoc/Aux';

Enzyme.configure({ adapter: new Adapter() });

// PageError Test
describe('>>>AUX HOC COMPONENT', () => {
  let wrapper;
  // Jest beforeEach()
  beforeEach(() => {
    wrapper = shallow(<Aux />);
  });
  it('component should exist', () => {
    expect(wrapper).toBeTruthy();
  });
});
