import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import HomeWithoutKeys from "../src/Pages/HomeWithoutKeys";
import DetailsWithTheSameKey from "../src/Pages/Breeds/DetailsWithSameKey";
import Details from "../src/Pages/Breeds/Details";
import "./styles.css";

function App() {
  return (
    <Router>
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
      </Routes>
    </Router>
  );
}

export default App;
