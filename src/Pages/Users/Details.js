import React from "react";
import { useQuery } from "@tanstack/react-query";
import { usersKeys, fetchUserPosts } from "./queries";
import { useParams, Link } from "react-router-dom";
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
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error! {error.message}</p>;
  }

  return (
    <>
      <Link className="link underline" to="/users">
        Go back
      </Link>
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
      <AddNewPost userId={id} />
    </>
  );
};

export default UserDetails;
