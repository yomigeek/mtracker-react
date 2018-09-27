import * as types from '../constants/actionTypes';

const initialState = {
  error: '',
  isAuthenticated: false,
};
const authReducer = (state = initialState, action) => {
  const { type, error } = action;
  switch (type) {
    case types.VALIDATION_ERROR:
      return {
        ...state,
        error,
      };
    case types.AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default authReducer;
