import "../../styles.css";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { pokemonKeys, fetchPokemonDetails } from "./queries";

export default function Details() {
  const { pokemon } = useParams();
  const { data, isError, isFetching, error } = useQuery(
    pokemonKeys.detail(pokemon),
    () => fetchPokemonDetails(pokemon),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 0,
      enabled: !!pokemon
    }
  );

  if (isFetching) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return (
      <>
        <Link className="link underline" to="/pokemons">
          Go back
        </Link>
        <div>Something went wrong: {error.message}</div>
      </>
    );
  }

  return (
    <>
      <Link className="link underline" to="/pokemons">
        Go back
      </Link>
      <h2 className="title">{data.forms[0].name}</h2>
      <img
        className="dog-image"
        src={data.sprites.other.home.front_default}
        alt={data.forms[0].name}
      />
    </>
  );
}
