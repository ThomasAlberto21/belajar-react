import axios from 'axios';
import React from 'react';

class DetailPost extends React.Component {
  state = {
    post: {
      title: '',
      body: '',
    },
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get(`http://localhost:3004/posts/${id}`).then((res) => {
      let post = res.data;
      this.setState({
        post: {
          title: post.title,
          body: post.body,
        },
      });
    });
  }
  render() {
    return (
      <>
        <h3>Detail Post</h3>
        <div className='detail'>
          <h2>{this.state.post.title}</h2>
          <p>{this.state.post.body}</p>
        </div>
      </>
    );
  }
}

export default DetailPost;
