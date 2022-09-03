import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MovieCard from "./MovieCard";
import { MovieContext } from "./MovieContext";

function MovieList() {
  // eslint-disable-next-line
  const { moviesData, setMoviesData } = useContext(MovieContext);
  return (
    <Container style={{ fontFamily: "Fira Code" }}>
      <Row>
        {moviesData.map((Movie) => (
          <MovieCard
            key={Movie.Id}
            Id={Movie.Id}
            Title={Movie.Title}
            Description={Movie.Plot}
            posterURL={Movie.Poster}
            Rate={Movie.Rating}
          />
        ))}
      </Row>
      <br />
    </Container>
  );
}

export default MovieList;
