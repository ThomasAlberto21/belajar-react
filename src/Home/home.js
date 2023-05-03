import React from 'react';
import BlogPost from '../pages/BlogPost/BlogPost';
import Video from '../components/props/video';
import Product from '../pages/Product/product';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './home.css';

class Home extends React.Component {
  render() {
    return (
      <Router>
        <>
          <div className='navigation'>
            <Link to='/'>Blog Post</Link>
            <Link to='/product'>product</Link>
            <Link to='/lifecycle'>lifecycle</Link>
          </div>
          <Route path='/' exact component={BlogPost} />
          <Route path='/detail-post/:id' component={DetailPost} />
          <Route path='/product' component={Product} />
          <Route path='/video' component={Video} />
          <Route path='/lifecycle' component={LifeCycleComp} />
        </>
      </Router>
    );
  }
}

export default Home;
