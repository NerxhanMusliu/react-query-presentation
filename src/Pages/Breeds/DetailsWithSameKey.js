import "../../../styles.css";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { breedsKeys, fetchDogBreedDetails } from "../queries";

export default function DetailsWithTheSameKey() {
  const { breed } = useParams();
  const { data, isError, isLoading, error } = useQuery(
    breedsKeys.details(),
    () => fetchDogBreedDetails(breed),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 0
    }
  );

  if (isLoading) {
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
      <Link to="/home-without-keys">Go back</Link>
      <h2 className="title">{breed}</h2>
      <img className="dog-image" src={data.message} alt={data.message} />
    </div>
  );
}