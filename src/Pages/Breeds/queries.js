import axios from "axios";

const breedsKeys = {
  all: ["dog-breeds"],
  lists: () => [...breedsKeys.all, "list"],
  listsWithOutKeys: () => [...breedsKeys.all, "list-without-keys"],
  list: (filters) => [...breedsKeys.lists(), { filters }],
  details: () => [...breedsKeys.all, "detail"],
  detail: (id) => [...breedsKeys.details(), id]
};

async function fetchDogBreeds() {
  const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
  return data;
}

async function fetchDogBreedDetails(breed) {
  const { data } = await axios.get(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  return data;
}

export { fetchDogBreedDetails, fetchDogBreeds, breedsKeys };
