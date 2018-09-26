import * as types from '../constants/actionTypes';

const initialState = {
  username: '',
  email: '',
  department: '',
  message: '',
};
const userReducer = (state = initialState, action) => {
  const { type, message } = action;
  switch (type) {
    case types.USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        message,
      };
    default:
      return state;
  }
};

export default userReducer;
