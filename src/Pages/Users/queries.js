import axios from "axios";

const usersKeys = {
  all: ["users"],
  lists: () => [...usersKeys.all, "list"],
  list: (filters) => [...usersKeys.lists(), { filters }],
  details: () => [...usersKeys.all, "detail"],
  detail: (id) => [...usersKeys.details(), id]
};

async function fetchUser() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
}

async function fetchUserPosts(userId) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}/posts`
  );
  return data;
}

async function createPost(params) {
  const data = await axios.post("https://jsonplaceholder.typicode.com/posts", {
    ...params
  });
  return data;
}

export { fetchUser, fetchUserPosts, createPost, usersKeys };
