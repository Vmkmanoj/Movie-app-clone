import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './componant/nav/nav';
import Home from './componant/Home/homes/homes';
import { homeData } from "../src/dumy.jsx"; // Ensure this path is correct
import './App.css';
import Movies from "./componant/movies/movies.jsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home ele={{ homeData }} />} /> {/* Pass homeData wrapped in an object */}
        <Route path="/movies" element={<Movies></Movies>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
