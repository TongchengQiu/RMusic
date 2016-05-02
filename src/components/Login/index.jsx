import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      usernameErr: '',
      password: '',
      passwordErr: ''
    };
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
    return false;
  }

  render() {
    const { username, usernameErr, password, passwordErr } = this.state;
    const { user } = this.props;
    return (
      <div className="view-login">
        {user.get('isLogining') && <div className="loading">asdsad</div>}
        <form>
          <div className="input-group">
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => { this.handleUsernameChange(e); }}
            />
            {usernameErr && <span className="err">{usernameErr}</span>}
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => { this.handlePasswordChange(e); }}
            />
            {passwordErr && <span className="err">{passwordErr}</span>}
          </div>
          <div className="input-group">
            <input
              type="submit"
              value="登录"
              onClick={(e) => { this.handleSubmit(e); }}
            />
          {user.get('loginError') && <span className="err">{user.get('loginError')}</span>}
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user
  }),
  dispatch => ({
    login: (...args) => dispatch(actions.user.login(...args))
  })
)(Login);
