import configureMockStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'fetch-mock';
import loginUser from '../../actions/loginAction';
import * as types from '../../constants/actionTypes';
// const fetch = require('jest-fetch-mock');

Enzyme.configure({ adapter: new Adapter() });

const mockFunction = jest.fn();
const mockHistory = { push: mockFunction };

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

const loginFailedResponse = {
  status: 'fail',
  message: 'Wrong password!',
};
const loginSuccessResponse = {
  status: 'success',
  message: 'Login successful',
  data: {
    mytoken: 'dkjdsjhdshhdsckdsjghsd.sdjhdshgvvgASVDASN',
    role: 'admin',
    username: 'Admin',
  },
};
const mockStorePayload = {
  mytoken: 'dkjdsjhdshhdsckdsjghsd.sdjhdshgvvgASVDASN',
  role: 'admin',
  username: 'Admin',
};
describe('login actions', () => {
  beforeEach(() => {
    store = mockStore({});
    jest.setTimeout(50000);
  });

  it('login a user successfully', async () => {
    const user = {
      email: 'admin@gmail.com',
      password: '123456',
    };
    fetch.restore();
    await fetch.postOnce('https://mtrackapi.herokuapp.com/api/v1/auth/login', loginSuccessResponse);
    const expectedActions = { type: types.USER_LOGIN_SUCCESS, payload: mockStorePayload };
    await store.dispatch(loginUser(user, mockHistory));
    const dispatchedActions = store.getActions();
    expect(dispatchedActions[5]).toEqual(expectedActions);
  });
  it('should fail to login a user on wrong details', async () => {
    const user = {
      email: 'admin@gmail.com',
      password: '12345678',
    };
    fetch.restore();
    await fetch.postOnce('https://mtrackapi.herokuapp.com/api/v1/auth/login', loginFailedResponse);
    const expectedActions = { type: types.VALIDATION_ERROR, error: 'Wrong password!' };
    await store.dispatch(loginUser(user, mockHistory));
    const dispatchedActions = store.getActions();
    expect(dispatchedActions[4]).toEqual(expectedActions);
  });
});
