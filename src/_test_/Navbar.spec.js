import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Navbar, mapDispatchToProps } from '../components/Navbar';

Enzyme.configure({ adapter: new Adapter() });

// PageError Test
describe('>>>Navigation Bar COMPONENT', () => {
  let wrapper;
  // Jest beforeEach()
  const mockFunction = jest.fn();
  beforeEach(() => {
    const props = {
      userRole: 'user',
      logoutUser: mockFunction,
      history: {
        push: mockFunction,
      },
    };
    wrapper = shallow(
      <Navbar
        {...props}
      />,
    );
  });
  it('component should exist', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('p')).toBeTruthy();
  });

  it('calls the logout button with', () => {
    const instance = wrapper.instance();
    instance.logUserOut();
    expect(mockFunction).toHaveBeenCalledTimes(2);
  });

  it('it dispatches the right action"', () => {
    const newProps = mapDispatchToProps(mockFunction);
    newProps.logoutUser();
    expect(mockFunction).toHaveBeenCalledTimes(3);
  });
});
