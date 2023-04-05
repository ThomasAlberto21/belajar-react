import React from 'react';
import './video.css';

// props berfungsi untuk membuat components lebih dinamis
const video = (props) => {
  return (
    <div className='youtube_wrapper'>
      <div className='img_thumb'>
        <img
          src='https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg'
          alt='img'
        />
        // ! mengambil props rating , title dan desc di home
        <p className='rating'>{props.rating}</p>
      </div>
      <p className='title'>{props.title}</p>
      <p className='desc'>{props.desc}</p>
    </div>
  );
};

// Membuat default props jika data tidak ada
video.defaultProps = {
  rating: '0.0',
  title: 'Tanpa Nama',
  desc: 'tidak diketahui',
};

export default video;
