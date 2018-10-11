import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from '../components/Login';

Enzyme.configure({ adapter: new Adapter() });

// PageError Test
describe('>>>LOGIN PAGE COMPONENT', () => {
  let wrapper;
  // Jest beforeEach()
  beforeEach(() => {
    const props = {
      error: '',
      handleInputChange: jest.fn(),
      submitUrl: jest.fn(),
      loading: false,
    };
    wrapper = shallow(
      <Login
        {...props}
      />,
    );
  });
  it('component should exist', () => {
    expect(wrapper).toBeTruthy();
  });
});
