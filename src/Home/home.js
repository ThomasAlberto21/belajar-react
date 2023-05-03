import React from 'react';
import BlogPost from '../pages/BlogPost/BlogPost';
import Video from '../components/props/video';
import Product from '../pages/Product/product';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import './home.css';

class Home extends React.Component {
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
            <Route path='/detail-post/:id' element={<DetailPost />} />
            <Route path='/product' element={<Product />} />
            <Route path='/video' element={<Video />} />
            <Route path='/lifecycle' element={<LifeCycleComp />} />
          </Routes>
        </>
      </BrowserRouter>
    );
  }
}

export default Home;
