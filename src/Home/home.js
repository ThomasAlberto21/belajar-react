import React from 'react';
import BlogPost from '../pages/BlogPost/BlogPost';
// import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
// import StatefullComponent from './components/StatefullComponent/StatefullComponent';
// import Video from '../components/props/video';
import Product from '../pages/Product/product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import './home.css';

class Home extends React.Component {
  state = {
    showComponents: true,
  };

  render() {
    return (
      <BrowserRouter>
        <>
          <div className='navigation'>
            <Link to='/'>Blog Post</Link>
            <Link to='/product'>product</Link>
            <Link to='/lifecycle'>lifecycle</Link>
          </div>
          <Routes>
            <Route path='/' exact element={<BlogPost />} />
            <Route path='/product' element={<Product />} />
            <Route path='/lifecycle' element={<LifeCycleComp />} />
          </Routes>
        </>
      </BrowserRouter>
    );
  }
}

export default Home;
