import React, { Component } from 'react';

class PostForm extends Component {
  state = {
    title: '',
    body: '',
  };

  onTextChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
