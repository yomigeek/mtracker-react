import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { LoginContainer } from '../../containers/LoginContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('Login Container component', () => {
  // create any initial state needed
  const initialState = {
    email: '',
    password: '',
  };
  const mockStore = configureStore();
  let wrapper;
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
    state: {
      auth: {
        error: '',
      },
    },
  };
  // const state = {
  //   auth: {
  //     error: '',
  //   },
  // };
  it('render login container component', () => {
    const store = mockStore(initialState);
    wrapper = shallow(<LoginContainer store={store} />);
  });
  it('Renders login form', () => {
    const store = mockStore(initialState);
    wrapper = shallow(<LoginContainer store={store} {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
});
