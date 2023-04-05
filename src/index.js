import React from 'react';
import ReactDOM from 'react-dom/client';
// import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
// import StatefullComponent from './components/StatefullComponent/StatefullComponent';
// import Home from './pages/Home/home';
import Product from './pages/Product/product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Product />
  </React.StrictMode>
);
