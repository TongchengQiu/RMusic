import * as constants from '../constants';

export function login(username, password) {
  return dispatch => {
    dispatch({
      type: constants.LOGGING
    });
    setTimeout(() => {
      (user => {
        console.log(username);
        console.log(password);
        dispatch({
          type: constants.LOGGED_IN,
          user,
        });
      })({
        username: 'hahaha'
      });
    }, 2000);
    // AV.User.logIn(username, passwd, {
    //   success: user => {
    //     dispatch({
    //       type: constants.LOGGED_IN,
    //       user,
    //     });
    //   },
    //   error: (user, error) => {
    //     dispatch({
    //       type: constants.LOGIN_FAILED,
    //       user,
    //       error,
    //     });
    //   },
    // });
  };
}

export const logout = () => ({
  type: constants.LOGGED_OUT
});
