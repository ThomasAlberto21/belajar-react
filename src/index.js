import React from 'react';
import ReactDOM from 'react-dom/client';
// import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
// import StatefullComponent from './components/StatefullComponent/StatefullComponent';
// import Home from './pages/Home/home';
// import Product from './pages/Product/product';
import LifeCycleComp from './pages/LifeCycleComp/LifeCycleComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <p>LifeCycle Component</p>
    <hr />
    <LifeCycleComp />
  </React.StrictMode>
);
