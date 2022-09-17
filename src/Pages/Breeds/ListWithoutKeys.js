import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchDogBreeds, breedsKeys } from "./queries";
import "../../styles.css";

export const ListWithoutKeys = () => {
  const { data, isError, isLoading } = useQuery(
    breedsKeys.listsWithOutKeys(),
    fetchDogBreeds
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      {data?.message && (
        <>
          <h2 className="title">Breeds Name (With the same query key)</h2>
          {Object.keys(data?.message).map((item, i) => (
            <div key={i} className="item">
              <Link className="link" to={`/details-with-same-key/${item}`}>
                {item}
              </Link>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default ListWithoutKeys;
