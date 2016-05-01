import React from 'react';
import { browserHistory } from 'react-router';

export default function Register() {
  return (
    <div className="no-register">
      <h1>register</h1>
      <button onClick={() => { browserHistory.goBack(); }}>back</button>
    </div>
  );
}
