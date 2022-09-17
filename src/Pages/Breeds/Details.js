import "../../styles.css";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { breedsKeys, fetchDogBreedDetails } from "./queries";

export default function Details() {
  const { breed } = useParams();
  const { data, isError, isFetching, error } = useQuery(
    breedsKeys.detail(breed),
    () => fetchDogBreedDetails(breed),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 0,
      enabled: !!breed
    }
  );

  if (isFetching) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return (
      <>
        <Link to="/home-without-keys">Go back</Link>
        <div>Something went wrong: {error.message}</div>
      </>
    );
  }

  return (
    <>
      <Link className="link underline" to="/">
        Go back
      </Link>
      {data?.message ? (
        <>
          <h2 className="title">{breed}</h2>
          <img className="dog-image" src={data.message} alt={data.message} />
        </>
      ) : (
        <div>
          <h2 className="title">No data for requested breed {breed}</h2>
        </div>
      )}
    </>
  );
}
