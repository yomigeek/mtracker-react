import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as types from '../../constants/actionTypes';
import loaderReducer from '../../reducers/loaderReducer';

Enzyme.configure({ adapter: new Adapter() });

// PageError Test
describe('>>>LOADER REDUCER', () => {
  const initialState = {
    loading: false,
    dashboardLoading: false,
  };
  it('isloading should change state', () => {
    const action = {
      type: types.IS_LOADING,
      loading: true,
    };
    const expectedNewState = {
      ...initialState,
      loading: true,
    };
    expect(loaderReducer(initialState, action)).toEqual(expectedNewState);
  });
  it('Dashboard loading should change state', () => {
    const action = {
      type: types.DASHBOARD_LOADING,
      dashboardLoading: true,
    };
    const expectedNewState = {
      ...initialState,
      loading: false,
      dashboardLoading: true,
    };
    expect(loaderReducer(initialState, action)).toEqual(expectedNewState);
  });
  it('isComplete should change state', () => {
    const action = {
      type: types.IS_COMPLETE,
      loading: false,
      dashboardLoading: false,
    };
    const expectedNewState = {
      ...initialState,
      loading: false,
      dashboardLoading: false,
    };
    expect(loaderReducer(initialState, action)).toEqual(expectedNewState);
  });
  it('No change change state', () => {
    const action = {
      type: 'none',
      loading: false,
      dashboardLoading: false,
    };
    const expectedNewState = {
      ...initialState,
      loading: false,
      dashboardLoading: false,
    };
    expect(loaderReducer(initialState, action)).toEqual(expectedNewState);
  });
});
