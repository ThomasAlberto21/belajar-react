import React from 'react';
import './BlogPost.css';
import axios from 'axios';
import Post from '../../components/Post/Post';

class BlogPost extends React.Component {
  state = {
    post: [],
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

    // ! Memanggil data API menggunakan axios dan menggunakan json-server(membuat fake API di dalam localhost kita)
    axios.get('http://localhost:3004/posts').then((result) => {
      this.setState({
        post: result.data,
      });
    });
  }

  render() {
    return (
      <>
        <p className='section-title'>Blog Post</p>
        {this.state.post.map((post) => {
          return <Post key={post.id} title={post.title} desc={post.body} />;
        })}
      </>
    );
  }
}

export default BlogPost;
