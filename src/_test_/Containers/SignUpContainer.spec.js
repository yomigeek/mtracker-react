import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SignUpContainer, mapDispatchToProps } from '../../containers/SignUpContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('Signup Container Component', () => {
  let wrapper;
  const event = {
    preventDefault: jest.fn(),
    target: {
      username: 'yomi',
    },
  };
  const mockFunction = jest.fn();
  const props = {
    handleInputChange: mockFunction,
    submitUrl: mockFunction,
    error: '',
    loading: false,
    login: mockFunction,
    history: {
      push: mockFunction,
    },
  };
  const mockUserDetails = {
    email: 'yoyo@ggmail.com',
    password: '123456',
    username: 'yomyom',
    department: 'IT',
  };
  it('Renders signup form', () => {
    wrapper = shallow(<SignUpContainer {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('calls the submit form handler', () => {
    wrapper = shallow(<SignUpContainer {...props} />);
    const instance = wrapper.instance();
    instance.signUpFormHandler(event);
    expect(mockFunction).toHaveBeenCalledTimes(0);
  });
  it('calls the input change event handler', () => {
    wrapper = shallow(<SignUpContainer {...props} />);
    const instance = wrapper.instance();
    instance.inputChangedHandler(event);
    expect(mockFunction).toHaveBeenCalledTimes(0);
  });
  it('it dispatches the action"', () => {
    const newPropsDispatch = mapDispatchToProps(mockFunction);
    newPropsDispatch.signup(mockUserDetails);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
