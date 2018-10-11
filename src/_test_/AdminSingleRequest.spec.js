import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AdminSingleRequest from '../components/AdminSingleRequest';

Enzyme.configure({ adapter: new Adapter() });

// PageError Test
describe('>>>SINGLE REQUEST PAGE COMPONENT', () => {
  let wrapper;
  // Jest beforeEach()
  beforeEach(() => {
    const requestDetail = {
      id: 1,
      title: 'Laptop repair',
      description: 'My laptop repair',
      priority: 'high',
    };
    const props = {
      error: '',
      handleInputChange: jest.fn(),
      submitUrl: jest.fn(),
      loading: false,
      message: '',
      requestDetail,
      approveRequest: jest.fn(),
      declineRequest: jest.fn(),
      resolveRequest: jest.fn(),
    };
    wrapper = shallow(
      <AdminSingleRequest
        {...props}
      />,
    );
  });
  it('component should exist', () => {
    expect(wrapper).toBeTruthy();
  });
});
