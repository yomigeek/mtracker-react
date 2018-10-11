import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as types from '../../constants/actionTypes';
import authReducer from '../../reducers/authReducer';

Enzyme.configure({ adapter: new Adapter() });

// PageError Test
describe('>>>AUTH REDUCER', () => {
  it('validation error should change state', () => {
    const initialState = {
      error: '',
      isAuthenticated: false,
    };
    const action = {
      type: types.VALIDATION_ERROR,
      error: 'This request cannot be processed!',
    };
    const expectedNewState = {
      error: 'This request cannot be processed!',
      isAuthenticated: false,
    };
    expect(authReducer(initialState, action)).toEqual(expectedNewState);
  });
  it('isAuthenticated should change state', () => {
    const initialState = {
      error: '',
      isAuthenticated: false,
    };
    const action = {
      type: types.AUTHENTICATION,
      isAuthenticated: true,
    };
    const expectedNewState = {
      error: '',
      isAuthenticated: true,
    };
    expect(authReducer(initialState, action)).toEqual(expectedNewState);
  });
  it('No change state', () => {
    const initialState = {
      error: '',
      isAuthenticated: false,
    };
    const action = {
      type: 'none',
      isAuthenticated: true,
    };
    const expectedNewState = {
      error: '',
      isAuthenticated: false,
    };
    expect(authReducer(initialState, action)).toEqual(expectedNewState);
  });
});
