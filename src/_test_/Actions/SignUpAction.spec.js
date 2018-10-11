import configureMockStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'fetch-mock';
import * as types from '../../constants/actionTypes';
import signUpUser from '../../actions/signUpAction';
// const fetch = require('jest-fetch-mock');

Enzyme.configure({ adapter: new Adapter() });
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
let message;

const signUpFailedResponse = {
  status: 'fail',
  message: 'No username',
};
const signUpSuccessResponse = {
  status: 'success',
  message: 'Account Created Successfully! You can now login below',
};
describe('login actions', () => {
  beforeEach(() => {
    store = mockStore({});
    jest.setTimeout(50000);
  });

  it('should signup a user successfully', async () => {
    const user = {
      email: 'oyomi@test.com',
      password: '123456',
      department: 'HR',
      username: 'yomyom',
    };
    message = 'Account Created Successfully! You can now login below';
    fetch.restore();
    await fetch.postOnce('https://mtrackapi.herokuapp.com/api/v1/auth/signup', signUpSuccessResponse);
    const expectedActions = { type: types.USER_SIGN_UP_SUCCESS, message };
    await store.dispatch(signUpUser(user));
    const dispatchedActions = store.getActions();
    expect(dispatchedActions[4]).toEqual(expectedActions);
  });
  it('should fail to signup a user with incorrect details', async () => {
    const user = {
      email: 'oyomi@test.com',
      password: '123456',
      department: 'HR',
      username: '',
    };
    message = 'No username';
    fetch.restore();
    await fetch.postOnce('https://mtrackapi.herokuapp.com/api/v1/auth/signup', signUpFailedResponse);
    const expectedActions = { type: types.VALIDATION_ERROR, error: message };
    await store.dispatch(signUpUser(user));
    const dispatchedActions = store.getActions();
    expect(dispatchedActions[3]).toEqual(expectedActions);
  });
});
