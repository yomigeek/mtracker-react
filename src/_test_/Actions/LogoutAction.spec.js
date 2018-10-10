import configureMockStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import * as types from '../../constants/actionTypes';
import logout from '../../actions/logoutAction';
// const fetch = require('jest-fetch-mock');

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

describe('login actions', () => {
  beforeEach(() => {
    store = mockStore({});
    jest.setTimeout(50000);
  });

  it('logout a user successfully', async () => {
    const expectedActions = [{ type: types.USER_LOGOUT_SUCCESS }];
    await store.dispatch(logout());
    const dispatchedActions = store.getActions();
    expect(dispatchedActions).toEqual(expectedActions);
  });
});
