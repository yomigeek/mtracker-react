import toastr from 'toastr';
import fetchData from '../utilities/fetchData';
import * as types from '../constants/actionTypes';

const loader = {
  type: types.IS_LOADING,
};
const complete = {
  type: types.IS_COMPLETE,
};

const signUpUser = userDetails => async (dispatch) => {
  let error = '';
  dispatch(loader);
  dispatch({ type: types.VALIDATION_ERROR, error });
  try {
    const response = await fetchData({
      apiUrl: '/auth/signup',
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
      const message = ' Account Created Successfully! You can now login below';
      dispatch({ type: types.VALIDATION_ERROR, error });
      dispatch({ type: types.USER_SIGN_UP_SUCCESS, message });
      return response.status;
    }
  } catch (err) {
    toastr.error('Unable to connect to the Internet, please check your connection and try agian...');
  }

  return null;
  // if (response.status === 200) {
  //   // localStorage.setItem('token', response.data.user.token);
  //   // localStorage.setItem('username', response.data.user.username);
  //   dispatch(userSignUpSuccessful(userDetails));
  //   // dispatch({ type: LOGIN_SUCCESSFUL, user: response.data.user });
  //   return history.push('/');
  // }
  // return dispatch(userSignUpSuccessful(userDetails));
};

export default signUpUser;
