import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = initialState => createStore(
  rootReducer,
  initialState,
  composeEnhancer(
    applyMiddleware(thunk, reduxImmutableStateInvariant(), createLogger({ collapsed: true })),
  )
  ,

);

export default configureStore;
