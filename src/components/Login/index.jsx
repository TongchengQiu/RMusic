import React from 'react';
import { browserHistory } from 'react-router';

export default function Login() {
  return (
    <div className="view-login">
      <h1>login</h1>
      <button onClick={() => { browserHistory.goBack(); }}>back</button>
    </div>
  );
}
