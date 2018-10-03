import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loaderReducer from './loaderReducer';
import authReducer from './authReducer';
import requestReducer from './requestReducer';

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  auth: authReducer,
  request: requestReducer,
});

export default rootReducer;
