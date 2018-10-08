import fetchData from '../utilities/fetchData';
import * as types from '../constants/actionTypes';

const dashboardLoader = {
  type: types.DASHBOARD_LOADING,
};
const complete = {
  type: types.IS_COMPLETE,
};
const userRole = localStorage.getItem('role');

const userRequests = role => async (dispatch) => {
  const error = '';
  dispatch(dashboardLoader);
  dispatch({ type: types.VALIDATION_ERROR, error });
  try {
    let response;
    if (role === 'admin') {
      response = await fetchData({
        apiUrl: '/requests',
        headerType: 'token-type',
      });
    }
    if (role === 'user') {
      response = await fetchData({
        apiUrl: '/users/requests',
        headerType: 'token-type',
      });
    }
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

const fetchASingleRequest = requestId => async (dispatch) => {
  const error = '';
  dispatch({ type: types.VALIDATION_ERROR, error });
  dispatch(dashboardLoader);
  try {
    let response;
    if (userRole === 'admin') {
      response = await fetchData({
        apiUrl: `/requests/${requestId}`,
        headerType: 'token-type',
      });
    }
    if (userRole === 'user') {
      response = await fetchData({
        apiUrl: `/users/requests/${requestId}`,
        headerType: 'token-type',
      });
    }
    dispatch(complete);
    if (response.status === 'fail') {
      return response.status;
    }
    if (response.status === 'success') {
      dispatch({
        type: types.GET_SINGLE_REQUEST_SUCCESS,
        payload: response.data.requests,
      });
      localStorage.setItem('lastViewedUsername', response.data.requests.username);
      return response.status;
    }
    return response.data.requests;
  } catch (err) {
    console.log(err);
  }
  return null;
};

const updateRequestAction = (requestId, requestDetails) => async (dispatch) => {
  let error = '';
  let message = '';
  dispatch(dashboardLoader);
  dispatch({ type: types.VALIDATION_ERROR, error });
  dispatch({ type: types.UPDATE_REQUEST_SUCCESS, message });
  try {
    const response = await fetchData({
      apiUrl: `/users/requests/${requestId}`,
      method: 'PUT',
      data: requestDetails.request,
      headerType: 'token-type',
    });
    dispatch(complete);
    if (response.status === 'fail') {
      error = response.message;
      dispatch({ type: types.VALIDATION_ERROR, error });
      return response;
    }
    if (response.status === 'success') {
      message = 'Request Updated Succesfully!';
      dispatch({ type: types.VALIDATION_ERROR, error });
      dispatch({ type: types.UPDATE_REQUEST_SUCCESS, message });
      dispatch({
        type: types.GET_SINGLE_REQUEST_SUCCESS,
        payload: requestDetails.request,
      });
      return response.status;
    }
  } catch (err) {
    console.log(err);
  }

  return null;
};

const approveRequestAction = requestId => async (dispatch) => {
  let error = '';
  let message = '';
  dispatch(dashboardLoader);
  dispatch({ type: types.VALIDATION_ERROR, error });
  dispatch({ type: types.APPROVE_REQUEST_SUCCESS, message });
  try {
    const response = await fetchData({
      apiUrl: `/requests/${requestId}/approve`,
      method: 'PUT',
      headerType: 'token-type',
    });
    dispatch(complete);
    if (response.status === 'fail') {
      error = response.message;
      dispatch({ type: types.VALIDATION_ERROR, error });
      return response;
    }
    if (response.status === 'success') {
      message = 'This Request has been Approved Succesfully!';
      dispatch({ type: types.VALIDATION_ERROR, error });
      dispatch({ type: types.APPROVE_REQUEST_SUCCESS, message });
      const viewedUsername = localStorage.getItem('lastViewedUsername');
      dispatch({
        type: types.GET_SINGLE_REQUEST_SUCCESS,
        payload: {
          id: response.data.id,
          title: response.data.title,
          username: viewedUsername,
          values: 'approved',
          description: response.data.description,
          priority: response.data.priority,
        },
      });
      return response.status;
    }
  } catch (err) {
    console.log(err);
  }

  return null;
};

export {
  userRequests, createRequestAction, fetchASingleRequest, updateRequestAction, approveRequestAction,
};
