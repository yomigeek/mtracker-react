import * as types from '../constants/actionTypes';

const initialState = {
  loading: false,
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
      };
    default:
      return state;
  }
};

export default loaderReducer;
