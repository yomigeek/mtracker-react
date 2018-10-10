import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { UserDashboardContainer, mapDispatchToProps } from '../../containers/UserDashboardContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('User Dashboard Container Component', () => {
  let wrapper;
  const mockFunction = jest.fn();
  const props = {
    error: '',
    requestLoading: false,
    history: {
      push: mockFunction,
    },
  };
  it('render dashboard component', () => {
    wrapper = shallow(
      <UserDashboardContainer {...props} />,
    );
    expect(wrapper).toBeTruthy();
  });
  it('it dispatches the action"', () => {
    const newPropsDispatch = mapDispatchToProps(mockFunction);
    newPropsDispatch.getAllRequest();
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
  it('calls the setFail method', () => {
    wrapper = shallow(<UserDashboardContainer {...props} />);
    const instance = wrapper.instance();
    instance.setFail();
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
