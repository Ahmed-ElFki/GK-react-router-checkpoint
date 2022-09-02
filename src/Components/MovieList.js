import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MovieCard from "./MovieCard";

function MovieList({ moviesArray }) {
  return (
    <Container style={{ fontFamily: "Fira Code" }}>
      <Row>
        {moviesArray.map((Movie) => (
          <MovieCard
            key={Movie.Id}
            Id={Movie.id}
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
