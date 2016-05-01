import React from 'react';
import { browserHistory } from 'react-router';

export default function NotFound() {
  return (
    <div className="no-found">
      <h1>404</h1>
      <button onClick={() => browserHistory.goBack()}>back</button>
    </div>
  );
}
