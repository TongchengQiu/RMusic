import * as constants from '../constants';
import { browserHistory } from 'react-router';
import AV from 'avoscloud-sdk';

const appId = 'OsU9BY2wgNjAgBMsfGjdBgW5-gzGzoHsz';
const appKey = 'JV4qaALRgFh8rL3tJVf2KBgr';
AV.initialize(appId, appKey);
window.AV = AV;

// login begin
export function login(username, password) {
  return dispatch => {
    dispatch({
      type: constants.LOGGING
    });
    AV.User.logIn(username, password)
    .then((user) => {
      console.log(user);
      browserHistory.replace('/home');
      dispatch({
        type: constants.LOGGED_IN,
        username,
      });
    })
    .catch((err) => {
      dispatch({
        type: constants.LOGIN_FAILED,
        error: err.message,
      });
    });
  };
}

export function logout() {
  return dispatch => {
    AV.User.logOut();
    browserHistory.replace('/login');
    dispatch({
      type: constants.LOGGED_OUT
    });
  };
}

export function judgeLogin() {
  return dispatch => {
    const currentUser = AV.User.current();
    if (currentUser) {
      dispatch({
        type: constants.LOGGED_IN,
        username: currentUser.attributes.username,
      });
    }
  };
}
// login end

// register begin
export function register(username, password) {
  return dispatch => {
    dispatch({
      type: constants.REGISTERING
    });
    const user = new AV.User();
    user.set('username', username);
    user.set('password', password);
    user.signUp().then((_user) => {
      console.log(_user);
      dispatch({
        type: constants.REGISTER_SUCCESS,
        username: _user.attributes.username
      });
      // dispatch(login(username, password));
      setTimeout(() => {
        browserHistory.replace('/home');
      }, 500);
    }).catch((err) => {
      if (err.code === 202) {
        dispatch({
          type: constants.REGISTER_FAILED,
          error: '用户已经被注册！'
        });
      }
    });
  };
}
// register end
