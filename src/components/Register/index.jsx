import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

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

  handleSubmit(e) {
    e.preventDefault();
    this.props.register(this.state.username, this.state.password);
    return false;
  }

  render() {
    const { username, usernameErr, password, passwordErr } = this.state;
    const { user } = this.props;
    return (
      <div className="view-register">
        {user.get('isRegistering') && <div className="loading">asdsad</div>}
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
              value="注册"
              onClick={(e) => { this.handleSubmit(e); }}
            />
            {user.get('registerError') && <span className="err">{user.get('registerError')}</span>}
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
