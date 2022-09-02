import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import AddMovie from "./AddMovie";
import { MovieContext } from "./MovieContext";

function Filter() {
  const { moviesData, setMoviesData } = useContext(MovieContext);
  // eslint-disable-next-line
  const [moviesDataCopy, setMoviesDataCopy] = useState([...moviesData]);
  const [movieName, setMovieName] = useState("");

  const handleFilter = () => {
    if (movieName.trim() != "")
      setMoviesData(
        moviesData
          .filter((currentMovie) =>
            currentMovie.Title.includes(movieName) ? currentMovie : null
          )
          .filter((currentMovie) => currentMovie != null)
      );
    else {
      setMoviesData(moviesDataCopy);
    }
  };

  return (
    <>
      <Container style={{ fontFamily: "Fira Code", marginTop: "30px" }}>
        <Row>
          <Col lg={10} md={10} sm={10} xs={10}>
            <InputGroup
              className="mb-3"
              onChange={(e) => {
                setMovieName(e.target.value);
                handleFilter();
              }}
            >
              <Form.Control
                placeholder="Movie Name"
                aria-label="Movie Name"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col lg={2} md={2} sm={2} xs={2}>
            <AddMovie />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Filter;
