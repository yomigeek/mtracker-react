import * as types from '../constants/actionTypes';

const initialState = {
  error: '',
  isAuthenticated: false,
  authMessage: '',
};
const authReducer = (state = initialState, action) => {
  const { type, error, message } = action;
  switch (type) {
    case types.VALIDATION_ERROR:
      return {
        ...state,
        error,
      };
    case types.USER_SIGN_UP_MESSAGE_SUCCESS:
      return {
        ...state,
        authMessage: message,
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
