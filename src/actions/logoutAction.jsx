import * as types from '../constants/actionTypes';
import clearLocalStorage from '../utilities/clearData';

const logout = () => (dispatch) => {
  clearLocalStorage();
  dispatch({
    type: types.USER_LOGOUT_SUCCESS,
  });
};

export default logout;
