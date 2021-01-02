import React from "react";
import "./post.css";
import moment from "moment";
import { useDispatch } from "react-redux";

import { deletePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card__left">
        <div className="creator">
          <h3>Employee Name: {post.creator}</h3>
          <h6>{moment(post.createdAt).fromNow()}</h6>
        </div>
        <h3 className="title">Task Name: {post.title}</h3>

        <h3 className="description">
          <span className="descMini">Description:</span> {post.message}
        </h3>
      </div>

      <button className="updateButton" onClick={() => setCurrentId(post._id)}>
        Update
      </button>
      <button
        className="deleteButton"
        onClick={() => dispatch(deletePost(post._id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Post;
