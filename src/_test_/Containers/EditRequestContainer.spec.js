import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { EditRequestContainer, mapDispatchToProps } from '../../containers/EditRequestContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('Signup Container Component', () => {
  const spy = sinon.spy(() => Promise.resolve({ message: 'I am working' }));
  let wrapper;
  const event = {
    preventDefault: jest.fn(),
  };
  const mockFunction = jest.fn();
  const mockRequestDetails = {
    title: 'Repair laptop',
    description: 'Laptop repair now now',
    priority: 'low',
  };
  const props = {
    handleInputChange: mockFunction,
    submitUrl: mockFunction,
    error: '',
    loading: false,
    requestMessage: '',
    requestDetail: mockRequestDetails,
    history: {
      push: mockFunction,
    },
    match: {
      params: {
        requestId: 1,
      },
    },
    fetchSingleRequest: spy,
    updateSingleRequest: spy,
  };

  it('Renders edit request form', () => {
    wrapper = shallow(<EditRequestContainer {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('dispatches the fetch request information action"', () => {
    const newPropsDispatch = mapDispatchToProps(mockFunction);
    newPropsDispatch.fetchSingleRequest(1);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
  it('dispatches the update single request information action"', () => {
    const newPropsDispatch = mapDispatchToProps(mockFunction);
    newPropsDispatch.updateSingleRequest(1, mockRequestDetails);
    expect(mockFunction).toHaveBeenCalledTimes(2);
  });
  it('calls the create form handler', () => {
    wrapper = shallow(<EditRequestContainer {...props} />);
    const instance = wrapper.instance();
    instance.updateRequestFormHandler(event);
    expect(mockFunction).toHaveBeenCalledTimes(2);
  });
});
