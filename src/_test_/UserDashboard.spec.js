import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserDashboard from '../components/UserDashboard';

Enzyme.configure({ adapter: new Adapter() });

// PageError Test
describe('>>>SINGLE REQUEST PAGE COMPONENT', () => {
  let wrapper;
  // Jest beforeEach()
  beforeEach(() => {
    const requests = [{
      id: 1,
      title: 'Laptop repair',
      description: 'My laptop repair',
      priority: 'high',
      values: 'pending',
      username: 'oyomi',
    },
    {
      id: 2,
      title: 'Laptop repair2',
      description: 'My laptop repair2',
      priority: 'low',
      values: 'pending',
      username: 'oyomi',
    },
    ];
    const props = {
      error: '',
      handleInputChange: jest.fn(),
      submitUrl: jest.fn(),
      loading: false,
      failedRequestMessage: '',
      requests,
    };
    wrapper = shallow(
      <UserDashboard
        {...props}
      />,
    );
  });
  it('component should exist', () => {
    expect(wrapper).toBeTruthy();
  });
  // it('renders three <Foo /> components', () => {
  //   expect(wrapper.find('tbody')).toHaveReturnedTimes(2);
  // });
});
