import React from 'react';
import './product.css';
import CardProduct from '../../components/CardProduct/cardProduct';

// State di ReactJS adalah objek yang digunakan untuk menyimpan dan mengatur data yang akan digunakan dalam komponen React. State adalah salah satu konsep terpenting dalam React karena memungkinkan kita untuk mengubah tampilan aplikasi secara dinamis berdasarkan interaksi pengguna atau perubahan data.

class Product extends React.Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <>
      <h3>Products</h3>
        <div className='header'>
          <div className='logo'>
            <img
              src='https://w7.pngwing.com/pngs/715/694/png-transparent-gold-r-logo-letter-p-clolorful-letters-miscellaneous-text-number.png'
              alt='logo'
            />
          </div>
          <div className='troley'>
            <img
              src='https://www.freeiconspng.com/uploads/basket-cart-icon-27.png'
              alt='basket cart icon'
            />
            <div className='count'>{this.state.order}</div>
          </div>
        </div>
        <CardProduct
          onCounterChange={(newValue) => this.handleCounterChange(newValue)}
        />
      </>
    );
  }
}

export default Product;
