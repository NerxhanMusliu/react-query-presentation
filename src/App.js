import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DetailsWithTheSameKey from "../src/Pages/Breeds/DetailsWithSameKey";
import Details from "../src/Pages/Breeds/Details";
import "./styles.css";
import List from "./Pages/Users/List";
import UserDetails from "./Pages/Users/Details";
import BreedList from "./Pages/Breeds/List";
import BreedListWithoutKeys from "./Pages/Breeds/ListWithoutKeys";

function App() {
  return (
    <Router>
      <header>
        <nav class="navbar">
          <ul>
            <li className="navigation-item">
              <Link to="/">useQuery</Link>
            </li>
            <li className="navigation-item">
              <Link to="/breed-without-keys">useQuery With Same Keys</Link>
            </li>
            <li className="navigation-item">
              <Link to="/users">useMutation</Link>
            </li>
            <li className="navigation-item">
              <Link to="/users">useInfintQuery</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="wrapper">
        <Routes>
          <Route path="/" exact element={<BreedList />} />
          <Route
            path="/breed-without-keys"
            element={<BreedListWithoutKeys />}
          />
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
      </div>
    </Router>
  );
}

export default App;
