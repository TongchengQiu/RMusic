import React from 'react';
import { Link, browserHistory } from 'react-router';

export default function Header({ username, logout }) {
  return (
    <header>
      <button onClick={() => browserHistory.goBack()}>Go to /login</button>
      {' '}
      <Link to="/home">我的</Link>
      {' '}
      {!username && <Link to="/login">登录</Link>}
      {' '}
      <Link to="/register">注册</Link>
      {' '}
      {username && <div className="usernamename">{username}</div>}
      {' '}
      {
        username &&
          <div
            className="logout"
            onClick={() => logout()}
          >
            logout
          </div>
      }
    </header>
  );
}
