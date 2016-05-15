import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import actions from '../../actions';

require('./index.scss');

class Register extends React.Component {
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

  handleClearErr(type) {
    this.setState({
      [`${type}Err`]: ''
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    if (!username) {
      this.setState({
        usernameErr: '请输入用户名'
      });
      return false;
    }
    if (!password) {
      this.setState({
        usernameErr: '请输入密码'
      });
      return false;
    }
    this.props.register(this.state.username, this.state.password);
    return false;
  }

  render() {
    const { username, usernameErr, password, passwordErr } = this.state;
    const { user } = this.props;
    return (
      <div className="view-register">
        <form className="form-register">
          <div className="input-group">
            <input
              className="ipt"
              type="text"
              placeholder="用户名"
              name="username"
              autoFocus="true"
              value={username}
              onChange={e => this.handleUsernameChange(e)}
              onFocus={() => this.handleClearErr('username')}
            />
            {usernameErr && <span className="err">{usernameErr}</span>}
          </div>
          <div className="input-group">
            <input
              className="ipt"
              placeholder="密码"
              type="password"
              name="password"
              value={password}
              onChange={e => this.handlePasswordChange(e)}
              onFocus={() => this.handleClearErr('password')}
            />
            {passwordErr && <span className="err">{passwordErr}</span>}
          </div>
          <div className="input-group">
            <input
              className="submit"
              type="submit"
              value={`注册${(user.get('isRegistering') ? '...' : '')}`}
              disabled={user.get('isRegistering')}
              onClick={e => this.handleSubmit(e)}
              onFocus={() => this.handleClearErr('password')}
            />
            {user.get('registerError') && <span className="err">{user.get('registerError')}</span>}
            <Link className="link-to" to="/login">登录</Link>
          </div>
          {user.get('isRegisterSuccess') && <div className="success-tip">注册成功</div>}
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
    register: (...args) => dispatch(actions.user.register(...args))
  })
)(Register);
