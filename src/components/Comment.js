import React from "react";

function Comment({ comment }) {
  return (
    <>
      <ul className="ul-post-avatar">
        <li className="li-avatar">
          <img src={comment.author.avatar} className="rounded-circle" />
        </li>
        <li>
          <div className="comments">
            <b>{comment.author.name}</b>
            {comment.content}
          </div>
        </li>
      </ul>
    </>
  );
}

export default Comment;
