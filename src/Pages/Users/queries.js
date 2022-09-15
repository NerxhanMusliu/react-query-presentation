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

export { fetchUser, usersKeys };
