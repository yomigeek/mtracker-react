import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as types from '../../constants/actionTypes';
import requestReducer from '../../reducers/requestReducer';

Enzyme.configure({ adapter: new Adapter() });

// PageError Test
describe('>>>REQUEST REDUCER', () => {
  const initialState = {
    message: '',
    allRequests: [],
    singleRequest: {},
  };
  const singleRequest = {
    id: 1,
    title: 'Laptop repair',
    description: 'My laptop repair',
    priority: 'high',
    values: 'pending',
    username: 'oyomi',
  };
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
  it('create request should change state on success', () => {
    const action = {
      type: types.CREATE_REQUEST_SUCCESS,
      message: 'Request created successfully!',
    };
    const expectedNewState = {
      ...initialState,
      message: 'Request created successfully!',
    };
    expect(requestReducer(initialState, action)).toEqual(expectedNewState);
  });
  it('get requests should change state on success', () => {
    const action = {
      type: types.GET_REQUESTS_SUCCESS,
      payload: requests,
    };
    const expectedNewState = {
      ...initialState,
      allRequests: requests,
    };
    expect(requestReducer(initialState, action)).toEqual(expectedNewState);
  });
  it('get single request should change state on success', () => {
    const action = {
      type: types.GET_SINGLE_REQUEST_SUCCESS,
      payload: singleRequest,
    };
    const expectedNewState = {
      ...initialState,
      singleRequest,
    };
    expect(requestReducer(initialState, action)).toEqual(expectedNewState);
  });
  it('update request should change state on success', () => {
    const action = {
      type: types.UPDATE_REQUEST_SUCCESS,
      message: 'Request has been updated successfully!',
    };
    const expectedNewState = {
      ...initialState,
      message: 'Request has been updated successfully!',
    };
    expect(requestReducer(initialState, action)).toEqual(expectedNewState);
  });
  it('approve request should change state on success', () => {
    const action = {
      type: types.APPROVE_REQUEST_SUCCESS,
      message: 'Request has been approved successfully!',
    };
    const expectedNewState = {
      ...initialState,
      message: 'Request has been approved successfully!',
    };
    expect(requestReducer(initialState, action)).toEqual(expectedNewState);
  });
  it('No change to state on no action specified', () => {
    const action = {
      type: 'none',
    };
    const expectedNewState = {
      ...initialState,
    };
    expect(requestReducer(initialState, action)).toEqual(expectedNewState);
  });
});
// switch (type) {
//   case types.CREATE_REQUEST_SUCCESS:
//     return {
//       ...state,
//       message,
//     };
//   case types.GET_REQUESTS_SUCCESS:
//     return {
//       ...state,
//       allRequests: payload,
//     };
//   case types.GET_SINGLE_REQUEST_SUCCESS:
//     return {
//       ...state,
//       singleRequest: payload,
//     };
//   case types.UPDATE_REQUEST_SUCCESS:
//     return {
//       ...state,
//       message,
//     };
//   case types.APPROVE_REQUEST_SUCCESS:
//     return {
//       ...state,
//       message,
//     };
//   default:
//     return state;
// }
// };
