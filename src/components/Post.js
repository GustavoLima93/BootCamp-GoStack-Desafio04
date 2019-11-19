import React, { Component } from "react";

import Comment from "./Comment";

class Post extends Component {
  state = {
    post: this.props.post,
    comments: this.props.comments
  };

  render() {
    return (
      <>
        <ul className="ul-post-avatar">
          <li className="li-avatar">
            <img
              src={this.state.post.author.avatar}
              className="rounded-circle"
            />
          </li>
          <li>
            {this.state.post.author.name} <br />{" "}
            <small>{this.state.post.date}</small>
          </li>
        </ul>
        <p>{this.state.post.content}</p>
        <hr />
        {this.state.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </>
    );
  }
}

export default Post;
