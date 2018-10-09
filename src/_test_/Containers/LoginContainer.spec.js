import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LoginContainer, mapDispatchToProps } from '../../containers/LoginContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('Login Container component', () => {
  let wrapper;
  const event = {
    preventDefault: jest.fn(),
  };
  const mockFunction = jest.fn();
  const props = {
    handleInputChange: mockFunction,
    submitUrl: mockFunction,
    error: '',
    loading: false,
    login: mockFunction,
  };
  const mockUserDetails = {
    email: 'yomi@mmmm.com',
    password: '123456',
  };
  const mockHistory = {
    push: mockFunction,
  };

  it('Renders login form', () => {
    wrapper = shallow(<LoginContainer {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('calls the submit form handler', () => {
    wrapper = shallow(<LoginContainer {...props} />);
    const instance = wrapper.instance();
    instance.loginFormHandler(event);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
  it('it dispatches the  action"', () => {
    const newPropsDispatch = mapDispatchToProps(mockFunction);
    newPropsDispatch.login(mockUserDetails, mockHistory);
    expect(mockFunction).toHaveBeenCalledTimes(2);
  });
});
