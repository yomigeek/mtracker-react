import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers/index';


const configureStore = initialState => createStore(
  rootReducer,
  initialState,
  applyMiddleware(reduxImmutableStateInvariant()),
);

export default configureStore;
