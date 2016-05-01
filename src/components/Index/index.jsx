import React from 'react';
import { browserHistory } from 'react-router';

export default function Index() {
  return (
    <div className="view-index">
      <h1>INDEX</h1>
      <button onClick={() => { browserHistory.goBack(); }}>back</button>
    </div>
  );
}
