import React from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';

require('./index.scss');

export default function Header({ username, logout }) {
  return (
    <header className="header clearfix">
      <button
        className="back-btn"
        onClick={() => browserHistory.goBack()}
      >
      </button>
      {
        username &&
          <a
            className="logout"
            onClick={() => logout()}
          >
            退出
          </a>
      }
      {
        username &&
          <Link to="/home" className="username" activeClassName="active">{username}</Link>
      }
      {
        !username &&
          <Link to="/register" activeClassName="active">注册</Link>
      }
      {
        !username &&
          <Link to="/login" activeClassName="active">登录</Link>
      }
      <IndexLink to="/" activeClassName="active">首页</IndexLink >
    </header>
  );
}
