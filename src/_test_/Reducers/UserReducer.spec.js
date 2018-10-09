import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as types from '../../constants/actionTypes';
import userReducer from '../../reducers/userReducer';

Enzyme.configure({ adapter: new Adapter() });

// PageError Test
describe('>>>USER REDUCER', () => {
  const initialState = {
    username: '',
    email: '',
    department: '',
    message: '',
    role: '',
  };
  it('signup should change state on success', () => {
    const action = {
      type: types.USER_SIGN_UP_SUCCESS,
      message: 'Signup successful!',
    };
    const expectedNewState = {
      ...initialState,
      message: 'Signup successful!',
    };
    expect(userReducer(initialState, action)).toEqual(expectedNewState);
  });
  it('login should change state on success', () => {
    const action = {
      type: types.USER_LOGIN_SUCCESS,
      message: 'Login successful!',
      payload: {
        username: 'oyomi',
        role: 'user',
      },
    };
    const expectedNewState = {
      ...initialState,
      username: 'oyomi',
      role: 'user',
    };
    expect(userReducer(initialState, action)).toEqual(expectedNewState);
  });
  it('logout should change state on success', () => {
    const action = {
      type: types.USER_LOGOUT_SUCCESS,
    };
    const expectedNewState = {
      ...initialState,
    };
    expect(userReducer(initialState, action)).toEqual(expectedNewState);
  });
  it('No change state on success', () => {
    const action = {
      type: 'none',
    };
    const expectedNewState = {
      ...initialState,
    };
    expect(userReducer(initialState, action)).toEqual(expectedNewState);
  });
});
