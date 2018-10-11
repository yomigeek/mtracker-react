import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AdminSingleRequestContainer, mapDispatchToProps } from '../../containers/AdminSingleRequestContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('User Dashboard Container Component', () => {
  let wrapper;
  const mockFunction = jest.fn();
  const singleRequest = {
    id: 1,
    title: 'Laptop repair',
    description: 'My laptop repair',
    priority: 'high',
    username: 'oyomi',
    status: 3,
  };
  const props = {
    error: '',
    loading: false,
    history: {
      push: mockFunction,
    },
    requestMessage: '',
    singleRequest,
    fetchSingleRequest: mockFunction,
    match: {
      params: {
        requestId: 1,
      },
    },
  };
  const event = {
    preventDefault: jest.fn(),
  };
  it('render dashboard component', () => {
    wrapper = shallow(
      <AdminSingleRequestContainer {...props} />,
    );
    expect(wrapper).toBeTruthy();
  });
  it('calls the approve request method', () => {
    wrapper = shallow(<AdminSingleRequestContainer {...props} />);
    const instance = wrapper.instance();
    instance.approveRequestHandler(event);
    expect(mockFunction).toHaveBeenCalledTimes(2);
  });
  it('calls the decline request method', () => {
    wrapper = shallow(<AdminSingleRequestContainer {...props} />);
    const instance = wrapper.instance();
    instance.declineRequestHandler(event);
    expect(mockFunction).toHaveBeenCalledTimes(3);
  });
  it('calls the resolve request method', () => {
    wrapper = shallow(<AdminSingleRequestContainer {...props} />);
    const instance = wrapper.instance();
    instance.resolveRequestHandler(event);
    expect(mockFunction).toHaveBeenCalledTimes(4);
  });
  it('it dispatches the fetch a single request action"', () => {
    const newPropsDispatch = mapDispatchToProps(mockFunction);
    newPropsDispatch.fetchSingleRequest(1);
    expect(mockFunction).toHaveBeenCalledTimes(5);
  });
  it('it dispatches the approve a single request action"', () => {
    const newPropsDispatch = mapDispatchToProps(mockFunction);
    newPropsDispatch.approveRequest(1, 'approve');
    expect(mockFunction).toHaveBeenCalledTimes(6);
  });
  it('it dispatches the decline a single request action"', () => {
    const newPropsDispatch = mapDispatchToProps(mockFunction);
    newPropsDispatch.declineRequest(2, 'decline');
    expect(mockFunction).toHaveBeenCalledTimes(7);
  });
  it('it dispatches the resolve a single request action"', () => {
    const newPropsDispatch = mapDispatchToProps(mockFunction);
    newPropsDispatch.resolveRequest(1, 'resolve');
    expect(mockFunction).toHaveBeenCalledTimes(8);
  });
});
