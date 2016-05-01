import React from 'react';
import { Link, browserHistory } from 'react-router';

export default function Header() {
  return (
    <header>
      <button onClick={() => browserHistory.goBack()}>Go to /login</button>
      {' '}
      <Link to="/home">我的</Link>
      {' '}
      <Link to="/login">登录</Link>
      {' '}
      <Link to="/register">注册</Link>
    </header>
  );
}
