import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import actions from '../../actions';

require('./index.scss');

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
        <form className="form-login">
          <div className="input-group">
            <input
              className="ipt"
              type="text"
              name="username"
              placeholder="用户名"
              autoFocus="true"
              value={username}
              onChange={(e) => { this.handleUsernameChange(e); }}
            />
          {usernameErr && <div className="err">{usernameErr}</div>}
          </div>
          <div className="input-group">
            <input
              className="ipt"
              type="password"
              name="password"
              placeholder="密码"
              value={password}
              onChange={(e) => { this.handlePasswordChange(e); }}
            />
            {passwordErr && <div className="err">{passwordErr}</div>}
          </div>
          <div className="input-group">
            <input
              className="submit"
              type="submit"
              value={`登录${(user.get('isLogining') ? '...' : '')}`}
              disabled={user.get('isLogining')}
              onClick={(e) => { this.handleSubmit(e); }}
            />
            <Link className="link-to" to="/register">去注册一个</Link>
            {user.get('loginError') && <div className="err">{user.get('loginError')}</div>}
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
