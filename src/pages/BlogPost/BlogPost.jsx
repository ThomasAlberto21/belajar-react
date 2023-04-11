import React from 'react';
import './BlogPost.css';
import axios from 'axios';
import Post from '../../components/Post/Post';

class BlogPost extends React.Component {
  state = {
    post: [],
  };

  getPostApi = () => {
    // ! Memanggil data API menggunakan axios dan menggunakan json-server(membuat fake API di dalam localhost kita)
    axios.get('http://localhost:3004/posts').then((result) => {
      this.setState({
        post: result.data,
      });
    });
  };

  // membuat handle untuk menghapus data
  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostApi();
    });
  };

  componentDidMount() {
    // ! Memanggil data API menggunakan fetch (ES6)
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       post: json,
    //     });
    //   });

    this.getPostApi();
  }

  render() {
    return (
      <>
        <p className='section-title'>Blog Post</p>
        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} remove={this.handleRemove} />;
        })}
      </>
    );
  }
}

export default BlogPost;
