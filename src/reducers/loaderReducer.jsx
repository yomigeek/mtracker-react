import * as types from '../constants/actionTypes';

const initialState = {
  loading: false,
  dashboardLoading: false,
};
const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.IS_COMPLETE:
      return {
        ...state,
        loading: false,
        dashboardLoading: false,
      };
    case types.DASHBOARD_LOADING:
      return {
        ...state,
        dashboardLoading: true,
      };
    default:
      return state;
  }
};

export default loaderReducer;
