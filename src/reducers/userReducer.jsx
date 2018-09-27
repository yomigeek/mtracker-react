import * as types from '../constants/actionTypes';

const initialState = {
  username: '',
  email: '',
  department: '',
  message: '',
  role: '',
};
const userReducer = (state = initialState, action) => {
  const { type, message, payload } = action;
  switch (type) {
    case types.USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        message,
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        username: payload.username,
        role: payload.role,
      };
    default:
      return state;
  }
};

export default userReducer;
