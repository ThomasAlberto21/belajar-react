import React from 'react';
import './BlogPost.css';
import axios from 'axios';
import Post from '../../components/Post/Post';

class BlogPost extends React.Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: '',
      body: '',
      userId: 1,
    },
  };

  // Memanggil data API menggunakan axios dan menggunakan json-server(membuat fake API di dalam localhost kita)
  getPostApi = () => {
    axios
      .get('http://localhost:3004/posts?_sort=id&_order=desc')
      .then((result) => {
        this.setState({
          post: result.data,
        });
      });
  };

  // Menambahkan data dan dikirimkan ke API
  postDataToApi = () => {
    axios.post('http://localhost:3004/posts', this.state.formBlogPost).then(
      (res) => {
        this.getPostApi();
      },
      (err) => {
        console.log(err);
      }
    );
  };

  // membuat handle untuk menghapus data
  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostApi();
    });
  };

  // Membuat handle untuk menambahkan data baru
  handleFormChange = (event) => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timeStamp = new Date().getTime(); // membuat id unik
    formBlogPostNew['id'] = timeStamp;
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  // membuat handle untuk submit form nya
  handleSubmit = () => {
    this.postDataToApi();
  };

  componentDidMount() {
    this.getPostApi();
  }

  render() {
    return (
      <>
        <p className='section-title'>Blog Post</p>
        <div className='form-add-post'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            placeholder='Add Your Title'
            onChange={this.handleFormChange}
          />
          <label htmlFor='body'>Body Content</label>
          <textarea
            name='body'
            id=''
            cols='30'
            rows='10'
            placeholder='Add Your Body Content'
            onChange={this.handleFormChange}
          ></textarea>
          <button
            type='submit'
            className='btn-submit'
            onClick={this.handleSubmit}
          >
            Simpan Blog{' '}
          </button>
        </div>
        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} remove={this.handleRemove} />;
        })}
      </>
    );
  }
}

export default BlogPost;
