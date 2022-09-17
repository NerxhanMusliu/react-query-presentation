import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../src/Pages/Home";
import HomeWithoutKeys from "../src/Pages/HomeWithoutKeys";
import DetailsWithTheSameKey from "../src/Pages/Breeds/DetailsWithSameKey";
import Details from "../src/Pages/Breeds/Details";
import "./styles.css";
import List from "./Pages/Users/List";
import UserDetails from "./Pages/Users/Details";

function App() {
  return (
    <Router>
      <ul className="navigation">
        <li className="navigation-item">
          <Link to="/">useQuery</Link>
        </li>
        <li className="navigation-item">
          <Link to="/users">useMutation</Link>
        </li>
        <li className="navigation-item">
          <Link to="/users">useInfintQuery</Link>
        </li>
      </ul>

      <hr />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home-without-keys" element={<HomeWithoutKeys />} />
        <Route path="/details/:breed" element={<Details />} />
        <Route path="/details" element={<Details />} />
        <Route
          path="/details-with-same-key/:breed"
          element={<DetailsWithTheSameKey />}
        />
        <Route
          path="/details-with-same-key/"
          element={<DetailsWithTheSameKey />}
        />
        {/* Users Routes */}
        <Route path="/users/" element={<List />} />
        <Route path="/users/details/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
