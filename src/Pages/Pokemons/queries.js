import axios from "axios";

const pokemonKeys = {
  all: ["pokemons"],
  lists: () => [...pokemonKeys.all, "list"],
  list: (filters) => [...pokemonKeys.lists(), { filters }],
  details: () => [...pokemonKeys.all, "detail"],
  detail: (id) => [...pokemonKeys.details(), id]
};

const fetchPokemons = async ({
  pageParam = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
}) => {
  const request = await axios.get(pageParam);
  return { response: request.data.results, nextPage: request.data.next };
};

async function fetchPokemonDetails(pokemon) {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  return data;
}

export { fetchPokemons, fetchPokemonDetails, pokemonKeys };
