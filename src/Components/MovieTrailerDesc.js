import React, { useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Home from "./Home";
import { MovieContext } from "./MovieContext";

function MovieTrailerDesc() {
  // eslint-disable-next-line
  const { moviesData, setMoviesData } = useContext(MovieContext);
  // eslint-disable-next-line
  const { Id, Title } = useParams();
  // eslint-disable-next-line
  const { Trailer, Plot } = moviesData.find((movie) => movie.Id == Id);

  return (
    <>
      <Home />
      <Container>
        <Row style={{ height: "300px" }}>
          <Col lg={12} md={12} sm={12}>
            <iframe
              width="100%"
              height="150%"
              src={Trailer}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style={{ marginTop: "25px" }}
            ></iframe>
          </Col>
        </Row>

        <Row>
          <Col
            lg={12}
            md={12}
            sm={12}
            style={{ marginTop: "200px", fontFamily: "Fira Code" }}
          >
            <b>Movie description :</b> {Plot}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MovieTrailerDesc;
