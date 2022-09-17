import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import "../../styles.css";
import { createPost, usersKeys } from "./queries";

const AddNewPost = ({ userId }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const queryClient = useQueryClient();

  const { isLoading, isError, error, mutate } = useMutation(createPost, {
    onSuccess: async (newPost) => {
      setShowMessage(true);
      setBody("");
      setTitle("");
      queryClient.setQueryData(
        usersKeys.detail(userId),
        (previousCacheData) => [...previousCacheData, newPost.data]
      );
    }
  });

  const createPostAction = (e) => {
    e.preventDefault();
    mutate({ title, body, userId });
  };

  return (
    <>
      {showMessage && <h3>New Post has been created</h3>}
      <h2 className="title">Add new post</h2>

      <div className="add-new-form">
        <form onSubmit={createPostAction}>
          <div className="form-element">
            <label className="form-element-label">Title of the post:</label>
            <input
              required
              className="form-element-input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-element">
            <label className="form-element-label">Body of the post:</label>
            <input
              required
              className="form-element-input"
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <button type="submit" className="form-element-input">
            Create new post
          </button>
        </form>

        <div className="info-wrapper">
          {isLoading ? "updating..." : ""}
          {isError ? error.message : ""}
        </div>
      </div>
    </>
  );
};

export default AddNewPost;
