import fetchData from '../utilities/fetchData';
import * as types from '../constants/actionTypes';

const dashboardLoader = {
  type: types.DASHBOARD_LOADING,
};
const complete = {
  type: types.IS_COMPLETE,
};

const userRequests = () => async (dispatch) => {
  const error = '';
  dispatch(dashboardLoader);
  dispatch({ type: types.VALIDATION_ERROR, error });
  try {
    const response = await fetchData({
      apiUrl: '/users/requests',
      method: 'GET',
      headerType: 'token-type',
    });
    dispatch(complete);
    if (response.status === 'fail') {
      return response.status;
    }
    dispatch({
      type: types.GET_REQUESTS_SUCCESS,
      payload: response.data.requests,
    });
    return response.data.requests;
  } catch (err) {
    console.log(err);
  }
  return null;
};

const createRequestAction = requestDetails => async (dispatch) => {
  let error = '';
  let message = '';
  dispatch(dashboardLoader);
  dispatch({ type: types.VALIDATION_ERROR, error });
  dispatch({ type: types.CREATE_REQUEST_SUCCESS, message });
  try {
    const response = await fetchData({
      apiUrl: '/users/requests',
      method: 'POST',
      data: requestDetails,
      headerType: 'token-type',
    });
    dispatch(complete);
    if (response.status === 'fail') {
      error = response.message;
      dispatch({ type: types.VALIDATION_ERROR, error });
      return response;
    }
    if (response.status === 'success') {
      message = 'Request Created Succesfully!';
      dispatch({ type: types.VALIDATION_ERROR, error });
      dispatch({ type: types.CREATE_REQUEST_SUCCESS, message });
      return response.status;
    }
  } catch (err) {
    console.log(err);
  }

  return null;
};

export { userRequests, createRequestAction };
