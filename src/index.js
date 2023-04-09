import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './pages/Home/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <p>Blog Post</p>
    <hr />
    <Home />
  </React.StrictMode>
);
