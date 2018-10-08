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
    const errorMessage = 'NETWORK/SERVER ERROR!';
    dispatch({ type: types.VALIDATION_ERROR, errorMessage });
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
    const errorMessage = 'NETWORK/SERVER ERROR!';
    dispatch({ type: types.VALIDATION_ERROR, errorMessage });
  }

  return null;
};

const fetchASingleRequest = requestId => async (dispatch) => {
  const error = '';
  const message = '';
  dispatch({ type: types.VALIDATION_ERROR, error });
  dispatch(dashboardLoader);
  dispatch({ type: types.APPROVE_REQUEST_SUCCESS, message });
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
    const errorMessage = 'NETWORK/SERVER ERROR!';
    dispatch({ type: types.VALIDATION_ERROR, errorMessage });
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
    const errorMessage = 'NETWORK/SERVER ERROR!';
    dispatch({ type: types.VALIDATION_ERROR, errorMessage });
  }

  return null;
};

const requestAction = (requestId, action) => async (dispatch) => {
  let error = '';
  let message = '';
  dispatch(dashboardLoader);
  dispatch({ type: types.VALIDATION_ERROR, error });
  dispatch({ type: types.APPROVE_REQUEST_SUCCESS, message });
  let apiUrl;
  let completeActionMessage;
  let actionValue;
  let actionStatusValue;
  if (action === 'decline') {
    apiUrl = `/requests/${requestId}/disapprove`;
    completeActionMessage = 'This Request has been Declined Succesfully!';
    actionValue = 'declined';
    actionStatusValue = 3;
  }
  if (action === 'resolve') {
    apiUrl = `/requests/${requestId}/resolve`;
    completeActionMessage = 'This Request has been Resolved Succesfully!';
    actionValue = 'resolved';
    actionStatusValue = 4;
  }
  if (action === 'approve') {
    apiUrl = `/requests/${requestId}/approve`;
    completeActionMessage = 'This Request has been Approved Succesfully!';
    actionValue = 'approved';
    actionStatusValue = 2;
  }
  try {
    const response = await fetchData({
      apiUrl,
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
      message = completeActionMessage;
      dispatch({ type: types.VALIDATION_ERROR, error });
      dispatch({ type: types.APPROVE_REQUEST_SUCCESS, message });
      const viewedUsername = localStorage.getItem('lastViewedUsername');
      dispatch({
        type: types.GET_SINGLE_REQUEST_SUCCESS,
        payload: {
          id: response.data.id,
          title: response.data.title,
          username: viewedUsername,
          values: actionValue,
          description: response.data.description,
          priority: response.data.priority,
          status: actionStatusValue,
        },
      });
      return response.status;
    }
  } catch (err) {
    const errorMessage = 'NETWORK/SERVER ERROR!';
    dispatch({ type: types.VALIDATION_ERROR, errorMessage });
  }

  return null;
};

export {
  userRequests, createRequestAction, fetchASingleRequest, updateRequestAction, requestAction,
};
