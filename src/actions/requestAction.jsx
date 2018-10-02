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
    return response.status;
  } catch (err) {
    console.log(err);
  }
  return null;
};

export default userRequests;
