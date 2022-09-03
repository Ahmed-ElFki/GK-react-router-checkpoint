import React from "react";
import Filter from "./Filter";
import MovieList from "./MovieList";

import Home from "./Home";

function MoviesPageDisplay() {
  return (
    <>
      <Home />
      <Filter />
      <MovieList />
    </>
  );
}

export default MoviesPageDisplay;
