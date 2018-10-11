import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PageError from '../components/PageError';

Enzyme.configure({ adapter: new Adapter() });

// PageError Test
describe('>>>PAGE ERROR COMPONENT', () => {
  let errorMessage;
  let wrapper;
  // Jest beforeEach()
  beforeEach(() => {
    errorMessage = 'This Request does not exist!';
  });
  beforeEach(() => {
    wrapper = shallow(<PageError errorMessage={errorMessage} />);
  });
  it('component should exist', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('h3').text()).toEqual(errorMessage);
  });
});
