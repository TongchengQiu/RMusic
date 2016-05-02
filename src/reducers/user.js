// import { combineReducers } from 'redux';
import { Map } from 'immutable';
import * as constants from '../constants';

const initialState = new Map({});

function user(state = initialState, action) {
  switch (action.type) {
    case constants.LOGGING:
      return state.set('isLogging', true).delete('error');

    case constants.LOGGED_IN:
      return state.set('isLogging', false).set('user', action.username);

    case constants.LOGIN_FAILED:
      return state.set('isLogging', false).set('error', action.error);

    default:
      return state;
  }
}

export default user;
