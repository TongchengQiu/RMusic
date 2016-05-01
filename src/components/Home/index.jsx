import React from 'react';
import { browserHistory } from 'react-router';

export default function Home() {
  return (
    <div className="view-home">
      <h1>HOME</h1>
      <button onClick={() => { browserHistory.goBack(); }}>back</button>
    </div>
  );
}
