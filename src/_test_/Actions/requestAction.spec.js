import configureMockStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'fetch-mock';
import {
  userRequests, createRequestAction, fetchASingleRequest, updateRequestAction,
  requestAction,
} from '../../actions/requestAction';
import * as types from '../../constants/actionTypes';
import localStorage from '../localStorage';

// const fetch = require('jest-fetch-mock');

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

const mockDetailsResponse = {
  status: 'success',
  message: 'Requests found',
  data: {
    requests: [
      {
        id: 1, title: 'My request 1', description: 'ssssss', priority: 'low', username: 'oyomi', values: 'approved',
      },
      {
        id: 1, title: 'My request 1', description: 'ssssss', priority: 'low', username: 'oyomi', values: 'approved',
      },
    ],
  },
};
const createRequestSuccessResponse = {
  status: 'success',
  message: 'Request Created Successfully!',
  data: {
    description: 'laptop dec',
    priority: 'low',
    title: 'laptop',
    userid: 3,
  },
};
const failedRequestResponse = {
  status: 'fail',
  message: 'No title',
};
const updateSuccessRequestResponse = {
  status: 'success',
  message: 'Request Updated Succesfully!',
};
const updateFailedRequestResponse = {
  status: 'faild',
  message: 'Request Update Failed!',
};
const approveSuccessRequestResponse = {
  status: 'success',
  message: 'This Request has been Approved Succesfully!',
};
const declineSuccessRequestResponse = {
  status: 'success',
  message: 'This Request has been Declined Succesfully!',
};
const request = {
  title: 'user new request',
  description: 'A new request created',
  priority: 'low',
};
const badRequest = {
  title: '',
  description: 'A new request created',
  priority: '',
};
const mockStorePayload = [
  {
    id: 1, title: 'My request 1', description: 'ssssss', priority: 'low', username: 'oyomi', values: 'approved',
  },
  {
    id: 1, title: 'My request 1', description: 'ssssss', priority: 'low', username: 'oyomi', values: 'approved',
  },
];

describe('login actions', () => {
  beforeEach(() => {
    store = mockStore({});
    jest.setTimeout(50000);
    beforeEach(() => localStorage.clear());
  });

  it('get user requests successfully', async () => {
    store = mockStore(mockStorePayload);
    fetch.restore();
    await fetch.getOnce('https://mtrackapi.herokuapp.com/api/v1/users/requests', mockDetailsResponse);
    const expectedActions = { type: types.GET_REQUESTS_SUCCESS, payload: mockStorePayload };
    await store.dispatch(userRequests('user'));
    const dispatchedActions = store.getActions();
    expect(dispatchedActions[3]).toEqual(expectedActions);
  });
  it('create user request', async () => {
    const message = 'Request Created Succesfully!';
    store = mockStore(mockStorePayload);
    fetch.restore();
    await fetch.postOnce('https://mtrackapi.herokuapp.com/api/v1/users/requests', createRequestSuccessResponse);
    const expectedActions = { type: types.CREATE_REQUEST_SUCCESS, message };
    await store.dispatch(createRequestAction(request));
    const dispatchedActions = store.getActions();
    expect(dispatchedActions[5]).toEqual(expectedActions);
  });
  it('should fail create user request on incomplete', async () => {
    const error = 'No title';
    store = mockStore(mockStorePayload);
    fetch.restore();
    await fetch.postOnce('https://mtrackapi.herokuapp.com/api/v1/users/requests', failedRequestResponse);
    const expectedActions = { type: types.VALIDATION_ERROR, error };
    await store.dispatch(createRequestAction(badRequest));
    const dispatchedActions = store.getActions();
    expect(dispatchedActions[4]).toEqual(expectedActions);
  });
  it('get a single user request', async () => {
    store = mockStore(mockStorePayload);
    fetch.restore();
    await fetch.getOnce(`https://mtrackapi.herokuapp.com/api/v1/users/requests/${1}`, mockDetailsResponse);
    const expectedActions = { type: types.GET_SINGLE_REQUEST_SUCCESS, payload: mockStorePayload };
    await store.dispatch(fetchASingleRequest(1, 'user'));
    const dispatchedActions = store.getActions();
    expect(dispatchedActions[4]).toEqual(expectedActions);
  });
  it('get a single user request for admin', async () => {
    store = mockStore(mockStorePayload);
    fetch.restore();
    await fetch.getOnce(`https://mtrackapi.herokuapp.com/api/v1/requests/${1}`, mockDetailsResponse);
    const expectedActions = { type: types.GET_SINGLE_REQUEST_SUCCESS, payload: mockStorePayload };
    await store.dispatch(fetchASingleRequest(1, 'admin'));
    const dispatchedActions = store.getActions();
    expect(dispatchedActions[4]).toEqual(expectedActions);
  });
  it('get a single user request for a user', async () => {
    store = mockStore(mockStorePayload);
    fetch.restore();
    await fetch.getOnce(`https://mtrackapi.herokuapp.com/api/v1/users/requests/${1}`, mockDetailsResponse);
    const expectedActions = { type: types.GET_SINGLE_REQUEST_SUCCESS, payload: mockStorePayload };
    await store.dispatch(fetchASingleRequest(1, 'user'));
    const dispatchedActions = store.getActions();
    expect(dispatchedActions[4]).toEqual(expectedActions);
  });
  it('update user request successfully', async () => {
    const message = 'Request Updated Succesfully!';
    store = mockStore(mockStorePayload);
    fetch.restore();
    await fetch.putOnce(`https://mtrackapi.herokuapp.com/api/v1/users/requests/${1}`, updateSuccessRequestResponse);
    const expectedActions = { type: types.UPDATE_REQUEST_SUCCESS, message };
    await store.dispatch(updateRequestAction(1, request));
    const dispatchedActions = store.getActions();
    expect(dispatchedActions[5]).toEqual(expectedActions);
  });
  it('should fail create user request on incomplete', async () => {
    const error = 'Request Update Failed!';
    store = mockStore(mockStorePayload);
    fetch.restore();
    await fetch.putOnce(`https://mtrackapi.herokuapp.com/api/v1/users/requests/${1}`, updateFailedRequestResponse);
    const expectedActions = { type: types.VALIDATION_ERROR, error };
    await store.dispatch(updateRequestAction(1, badRequest));
    const dispatchedActions = store.getActions();
    expect(dispatchedActions[4]).toEqual(expectedActions);
  });
  it('should approve user request', async () => {
    const message = 'This Request has been Approved Succesfully!';
    store = mockStore(mockStorePayload);
    fetch.restore();
    await fetch.putOnce(`https://mtrackapi.herokuapp.com/api/v1/requests/${1}/approve`, approveSuccessRequestResponse);
    const expectedActions = { type: types.APPROVE_REQUEST_SUCCESS, message };
    await store.dispatch(requestAction(1, 'approve'));
    const dispatchedActions = store.getActions();
    expect(dispatchedActions[5]).toEqual(expectedActions);
  });
  it('should decline user request', async () => {
    const message = 'This Request has been Declined Succesfully!';
    store = mockStore(mockStorePayload);
    fetch.restore();
    await fetch.putOnce(`https://mtrackapi.herokuapp.com/api/v1/requests/${1}/disapprove`, declineSuccessRequestResponse);
    const expectedActions = { type: types.APPROVE_REQUEST_SUCCESS, message };
    await store.dispatch(requestAction(1, 'decline'));
    const dispatchedActions = store.getActions();
    expect(dispatchedActions[5]).toEqual(expectedActions);
    expect(dispatchedActions[5]).toEqual(expectedActions);
  });
});
