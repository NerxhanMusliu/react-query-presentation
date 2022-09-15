import React from "react";
import { useQuery } from "@tanstack/react-query";
import { usersKeys, fetchUserPosts } from "./queries";
import { useParams } from "react-router-dom";
import AddNewPost from "./AddNewPost";

const UserDetails = () => {
  const { id } = useParams();

  const { data, error, isError, isLoading } = useQuery(
    usersKeys.detail(id),
    () => fetchUserPosts(id),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 0,
      enabled: !!id
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <div className="wrapper">
      <h2 className="title">Post for user with id {id}</h2>
      {data.map((post) => {
        return (
          <div key={post.id} className="item-post">
            <h4 className="post-title">{post.title}</h4>
            <p className="post-body">{post.body}</p>
          </div>
        );
      })}

      <hr />
      <h2 className="title">Add new post</h2>
      <AddNewPost userId={id} />
    </div>
  );
};

export default UserDetails;
