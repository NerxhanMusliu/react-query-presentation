import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchDogBreeds, breedsKeys } from "./queries";
import "../../styles.css";

export const List = () => {
  const { data, isError, isLoading } = useQuery(breedsKeys.lists(), () =>
    fetchDogBreeds()
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
          <h2 className="title">Breeds Name</h2>
          {Object.keys(data?.message).map((item, i) => (
            <div key={i} className="item">
              <Link className="link" to={`details/${item}`}>
                {item}
              </Link>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default List;
