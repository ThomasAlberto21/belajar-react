import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './pages/Home/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <p>LifeCycle Component</p>
    <hr />
    <Home />
  </React.StrictMode>
);
