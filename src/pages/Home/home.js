import React from 'react';
// import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
// import StatefullComponent from './components/StatefullComponent/StatefullComponent';
// import Product from '../Product/product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';

class Home extends React.Component {
  state = {
    showComponents: true,
  };

  render() {
    return (
      <>
        {/* <Video rating='8.50' title='Orang Utan 1' desc='sdsdsadhsdansjdsjbdssd' />
        <Video rating='7.50' title='Orang Utan 2' desc='dasascsadkpaslda;sd' />
        <Video rating='5.30' title='Orang Utan 3' desc='sdacvscnjhdjsbdsdsdhs' />
        <Video rating='7.90' title='Orang Utan 4' desc='sdasnccskasdsaksdmsds' />
        <Video /> */}

        {/* <Product /> */}
        {this.state.showComponents ? <LifeCycleComp /> : null}
      </>
    );
  }
}

export default Home;
