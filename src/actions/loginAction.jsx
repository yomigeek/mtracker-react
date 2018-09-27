import fetchData from '../utilities/fetchData';
import * as types from '../constants/actionTypes';

const loader = {
  type: types.IS_LOADING,
};
const complete = {
  type: types.IS_COMPLETE,
};

const loginUser = (userDetails, history) => async (dispatch) => {
  let error = '';
  dispatch(loader);
  dispatch({ type: types.VALIDATION_ERROR, error });
  try {
    const response = await fetchData({
      apiUrl: '/auth/login',
      method: 'POST',
      data: userDetails,
    });
    dispatch(complete);
    if (response.status === 'fail') {
      error = response.message;
      dispatch({ type: types.VALIDATION_ERROR, error });
      return response;
    }
    if (response.status === 'success') {
      dispatch({ type: types.AUTHENTICATION });
      dispatch({ type: types.USER_LOGIN_SUCCESS, payload: response.data });
      localStorage.setItem('token', response.data.mytoken);
      localStorage.setItem('username', response.data.username);
      localStorage.setItem('authenticated', true);
      localStorage.setItem('role', response.data.role);

      if (response.data.role === 'user') history.push('/dashboard');
      // return response;
    }
  } catch (err) {
    console.log(err);
  }
  return null;
};

export default loginUser;
