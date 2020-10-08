import React, { Component } from 'react';

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

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
          <button type="submit" style={btnStyle}>Submit</button>
        </form>
      </div>
    );
  }
}

const btnStyle = {
  background: '#ADD8E6',
  cursor: 'pointer',
};

export default PostForm;
