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
    return <div>Loading...</div>;
  }
  if (isError) {
    return (
      <div className="wrapper">
        <Link to="/home-without-keys">Go back</Link>
        <div>Something went wrong: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <Link to="/">Go back</Link>
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
    </div>
  );
}
