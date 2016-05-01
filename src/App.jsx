import React from 'react';

import Header from './components/Header';

export default function App({ children }) {
  return (
    <div>
      <Header />
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  );
}
