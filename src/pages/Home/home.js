import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
// import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
// import StatefullComponent from './components/StatefullComponent/StatefullComponent';
import Video from '../../components/props/video';
import Product from '../Product/product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';

class Home extends React.Component {
  state = {
    showComponents: true,
  };

  render() {
    return (
      <>
        <h3>Video</h3>
        <Video
          rating='8.50'
          title='Orang Utan 1'
          desc='sdsdsadhsdansjdsjbdssd'
        />
        <Video rating='7.50' title='Orang Utan 2' desc='dasascsadkpaslda;sd' />
        <Video
          rating='5.30'
          title='Orang Utan 3'
          desc='sdacvscnjhdjsbdsdsdhs'
        />
        <Video
          rating='7.90'
          title='Orang Utan 4'
          desc='sdasnccskasdsaksdmsds'
        />
        <Video />
        <hr />

        <Product />
        <hr />
        {this.state.showComponents ? <LifeCycleComp /> : null}
        <hr />

        <BlogPost />
      </>
    );
  }
}

export default Home;
