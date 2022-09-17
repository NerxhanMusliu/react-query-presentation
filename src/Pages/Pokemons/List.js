import { useInfiniteQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchPokemons, pokemonKeys } from "./queries";
import "../../styles.css";

export const List = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery(pokemonKeys.lists(), fetchPokemons, {
    getNextPageParam: (lastPage) => lastPage.nextPage
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      {data?.pages && (
        <>
          <h2 className="title">Pokemons</h2>
          {data.pages.map((group, i) =>
            group.response.map((pokemon) => (
              <div key={pokemon.name} className="item">
                <Link className="link" to={`/pokemons/details/${pokemon.name}`}>
                  {pokemon.name}
                </Link>
              </div>
            ))
          )}
          <button
            className="form-element-input"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
          </button>
        </>
      )}
    </>
  );
};

export default List;
