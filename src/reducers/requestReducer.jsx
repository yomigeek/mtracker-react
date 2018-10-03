import * as types from '../constants/actionTypes';

const initialState = {
  message: '',
  allRequests: [],
  singleRequest: {},
};
const requestReducer = (state = initialState, action) => {
  const { type, message, payload } = action;
  switch (type) {
    case types.CREATE_REQUEST_SUCCESS:
      return {
        ...state,
        message,
      };
    case types.GET_REQUESTS_SUCCESS:
      return {
        ...state,
        allRequests: payload,
      };
    case types.GET_SINGLE_REQUEST_SUCCESS:
      return {
        ...state,
        singleRequest: payload,
      };
    case types.UPDATE_REQUEST_SUCCESS:
      return {
        ...state,
        message,
      };
    default:
      return state;
  }
};

export default requestReducer;
