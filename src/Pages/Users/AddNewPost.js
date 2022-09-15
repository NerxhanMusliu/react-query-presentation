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
    onSuccess: () => {
      setShowMessage(true);
      setBody("");
      setTitle("");
      queryClient.invalidateQueries(usersKeys.detail(userId));
    }
  });

  const createPostAction = () => {
    mutate({ title, body, userId });
  };

  return (
    <>
      {showMessage && <h3>New Post has been created</h3>}
      <div className="add-new-form">
        <div className="form-element">
          <label className="form-element-label">Title of the post:</label>
          <input
            className="form-element-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-element">
          <label className="form-element-label">Body of the post:</label>
          <input
            className="form-element-input"
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button className="form-element-input" onClick={createPostAction}>
          Create new post
        </button>

        <div className="">
          {isLoading ? "updating..." : ""}
          {isError ? error.message : ""}
        </div>
      </div>
    </>
  );
};

export default AddNewPost;
