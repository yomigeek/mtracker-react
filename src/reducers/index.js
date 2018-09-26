import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loaderReducer from './loaderReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  auth: authReducer,
});

export default rootReducer;
