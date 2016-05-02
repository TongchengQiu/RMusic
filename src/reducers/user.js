import { Map } from 'immutable';
import * as constants from '../constants';

const initialState = new Map({
  isLogging: false,
  username: null
});

function user(state = initialState, action) {
  switch (action.type) {
    case constants.LOGGING:
      return state.set('isLogging', true).delete('loginError');

    case constants.LOGGED_IN:
      return state.set('isLogging', false).set('username', action.username);

    case constants.LOGIN_FAILED:
      return state.set('isLogging', false).set('loginError', action.error);

    case constants.LOGGED_OUT:
      return state.set('username', null);

    case constants.REGISTERING:
      return state.set('isRegistering', true).delete('registerError');

    case constants.REGISTER_FAILED:
      return state.set('isRegistering', false).set('registerError', action.error);

    case constants.REGISTER_SUCCESS:
      return state.set('isRegistering', false)
      .set('isRegisterSuccess', true)
      .set('username', action.username)
      .delete('registerError');

    default:
      return state;
  }
}

export default user;
