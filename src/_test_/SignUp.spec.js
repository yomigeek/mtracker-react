import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignUp from '../components/SignUp';

Enzyme.configure({ adapter: new Adapter() });

// PageError Test
describe('>>>SIGNUP PAGE COMPONENT', () => {
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
      <SignUp
        {...props}
      />,
    );
  });
  it('component should exist', () => {
    expect(wrapper).toBeTruthy();
  });
});
