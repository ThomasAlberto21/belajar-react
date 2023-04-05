import React from 'react';

// State di ReactJS adalah objek yang digunakan untuk menyimpan dan mengatur data yang akan digunakan dalam komponen React. State adalah salah satu konsep terpenting dalam React karena memungkinkan kita untuk mengubah tampilan aplikasi secara dinamis berdasarkan interaksi pengguna atau perubahan data.

class CardProduct extends React.Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  // Menambahkan nilai state order dengan jumlah 1
  plusButton = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };

  // membuat kondisi jika state order memiliki nilai yg lebih besar dari 0 maka kurangkan nilai state order dengan jumlah 1
  minusButton = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };

  render() {
    return (
      <div className='card'>
        <div className='img-thumb-prod'>
          <img
            src='https://cdn-2.tstatic.net/kaltim/foto/bank/images/resep-nasi-goreng-jawa.jpg'
            alt='nasi goreng'
          />
        </div>
        <p className='product-title'>Nasi Goreng Ayam</p>
        <p className='product-price'>Rp.20.000</p>
        <div className='counter'>
          <button className='minus' onClick={this.minusButton}>
            -
          </button>
          <input type='text' value={this.state.order} />
          <button className='plus' onClick={this.plusButton}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CardProduct;
