import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreateRequest from '../components/CreateRequest';

Enzyme.configure({ adapter: new Adapter() });

// PageError Test
describe('>>>CREATE REQUEST PAGE COMPONENT', () => {
  let wrapper;
  // Jest beforeEach()
  beforeEach(() => {
    const props = {
      error: '',
      handleInputChange: jest.fn(),
      submitUrl: jest.fn(),
      loading: false,
      message: '',
    };
    wrapper = shallow(
      <CreateRequest
        {...props}
      />,
    );
  });
  it('component should exist', () => {
    expect(wrapper).toBeTruthy();
  });
});
