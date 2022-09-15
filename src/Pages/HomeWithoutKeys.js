import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchDogBreeds, breedsKeys } from "../Pages/Breeds/queries";
import "../styles.css";

export const HomeWithoutKeys = () => {
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
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/home-without-keys">Home 2</Link>
            </li>
          </ul>
          <div className="wrapper">
            <h2 className="title">Breeds Name</h2>
            {Object.keys(data?.message).map((item, i) => (
              <div key={i} className="item">
                <Link className="link" to={`/details-with-same-key/${item}`}>
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default HomeWithoutKeys;
