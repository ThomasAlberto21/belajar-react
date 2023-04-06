import React from 'react';
import './LifeCycleComp.css';

/*
    ReactJS adalah sebuah library JavaScript yang digunakan untuk membangun antarmuka pengguna pada aplikasi web. Pada umumnya, sebuah komponen pada ReactJS memiliki siklus hidup atau lifecycle yang terdiri dari beberapa tahapan yang terjadi ketika komponen tersebut di-mount, di-update atau di-unmount dari DOM.

    Berikut ini adalah penjelasan dari lifecycle ReactJS beserta dengan keterangan pada setiap tahapannya:

    ? Mounting: Tahap ini terjadi ketika sebuah komponen baru ditambahkan ke DOM. ReactJS akan melakukan proses inisialisasi dan rendering pada komponen tersebut. Tahapan pada Mounting adalah:

    * constructor() : Method ini digunakan untuk inisialisasi awal state dan props.

    * static getDerivedStateFromProps(): Method ini digunakan untuk mengupdate state dengan nilai props yang baru dan akan dipanggil setiap kali terjadi update pada props atau state sebuah komponen, sebelum method render() dijalankan.

    * render(): Method ini digunakan untuk merender komponen.

    * componentDidMount(): Method ini dipanggil setelah render selesai dan dijalankan setelah komponen terpasang pada DOM.


    ? Updating: Tahap ini terjadi ketika sebuah komponen di-update, baik karena adanya perubahan pada props atau state. Tahapan pada Updating adalah:

    * static getDerivedStateFromProps(): Method ini digunakan untuk mengupdate state dengan nilai props yang baru dan akan dipanggil setiap kali terjadi update pada props atau state sebuah komponen, sebelum method render() dijalankan.

    * shouldComponentUpdate(): Method ini digunakan untuk mengecek apakah komponen perlu di-update atau tidak (true jika ingin diupdate dan false jika tidak ingin diupdate).

    * render(): Method ini digunakan untuk merender komponen.

    * componentDidMount(): Method ini dipanggil setelah render selesai dan dijalankan setelah komponen terpasang pada DOM.

    * getSnapshotBeforeUpdate(): Method ini digunakan untuk mengambil snapshot dari DOM sebelum perubahan.
    
    * componentDidUpdate(): Method ini dipanggil setelah update selesai dan dijalankan setelah komponen selesai di-update.


    ? Unmounting: Tahap ini terjadi ketika sebuah komponen dihapus dari DOM. Tahapan pada Unmounting adalah:

    * componentWillUnmount(): Method ini dipanggil sebelum komponen dihapus dari DOM dan digunakan untuk membersihkan state atau resource yang tidak diperlukan.
*/

class LifeCycleComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log('constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => {
      this.setState({
        count: 2,
      });
    }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(nextProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return <button className='btn'>Component Button {this.state.count}</button>;
  }
}

export default LifeCycleComp;
