import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
  state = {
    title: '',
    body: '',
  };

  onTextChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onTextChange.bind(this)}
              value={this.state.title}
            />
          </div>
          <div>
            <label>Body: </label>
            <br />
            <input
              type="textarea"
              name="body"
              onChange={this.onTextChange.bind(this)}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit" style={btnStyle}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const btnStyle = {
  background: '#ADD8E6',
  cursor: 'pointer',
};

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};



export default connect(null, { createPost })(PostForm);
