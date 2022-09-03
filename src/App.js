import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import MoviesPageDisplay from "./Components/MoviesPageDisplay";
import MovieTrailerDesc from "./Components/MovieTrailerDesc";
import { useState } from "react";
import { MoviesData } from "./MoviesData/Moviesdata";
import { MovieContext } from "./Components/MovieContext";

function App() {
  const [moviesData, setMoviesData] = useState(MoviesData);
  return (
    <MovieContext.Provider value={{ moviesData, setMoviesData }}>
      <Routes>
        <Route exact path="/" element={<MoviesPageDisplay />} />
        <Route path="/:Id/:Title" element={<MovieTrailerDesc />} />
      </Routes>
    </MovieContext.Provider>
  );
}

export default App;
