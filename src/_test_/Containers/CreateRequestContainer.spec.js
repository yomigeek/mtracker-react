import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CreateRequestContainer, mapDispatchToProps } from '../../containers/CreateRequestContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('Signup Container Component', () => {
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
    history: {
      push: mockFunction,
    },
  };
  const mockRequestDetails = {
    title: 'Repair laptop',
    description: 'Laptop repair now now',
    priority: 'low',
  };
  it('Renders signup form', () => {
    wrapper = shallow(<CreateRequestContainer {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('calls the create form handler', () => {
    wrapper = shallow(<CreateRequestContainer {...props} />);
    const instance = wrapper.instance();
    instance.createRequestFormHandler(event);
    expect(mockFunction).toHaveBeenCalledTimes(0);
  });
  it('dispatches the create request action"', () => {
    const newPropsDispatch = mapDispatchToProps(mockFunction);
    newPropsDispatch.createARequest(mockRequestDetails);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
