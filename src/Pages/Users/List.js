import React from "react";
import { useQuery } from "@tanstack/react-query";
import { usersKeys, fetchUser } from "./queries";
import { Link } from "react-router-dom";

const List = () => {
  const { data, error, isError, isLoading } = useQuery(
    usersKeys.lists(),
    fetchUser
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <div className="wrapper">
      <h2 className="title">Users Name</h2>
      {data.map((user, id) => {
        return (
          <div key={id} className="item">
            <Link className="link" to={`details/${user.id}`}>
              {user.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default List;
