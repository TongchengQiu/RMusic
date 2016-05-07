import React from 'react';
import { Link, browserHistory } from 'react-router';

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
      {username && <Link to="/home" className="username">{username}</Link>}
      {!username && <Link to="/register">注册</Link>}
      {!username && <Link to="/login">登录</Link>}
    </header>
  );
}
