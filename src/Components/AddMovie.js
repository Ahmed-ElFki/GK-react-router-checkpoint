import React, { useContext, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { MovieContext } from "./MovieContext";

function AddMovie() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let name = useRef();
  let url = useRef();
  let description = useRef();
  let rate = useRef();

  const [movie, setMovie] = useState({
    Title: "",
    Plot: "",
    Poster: "",
    Rating: 0,
  });

  const { moviesData, setMoviesData } = useContext(MovieContext);

  const handleAdd = () => {
    setMoviesData([...moviesData, movie]);
    setShow(false);
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ fontFamily: "Fira Code", width: "100%" }}
      >
        Add Movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        style={{ fontFamily: "Fira Code" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter Movie Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup
            className="mb-3"
            ref={name}
            onChange={(e) => setMovie({ ...movie, Title: e.target.value })}
          >
            <InputGroup.Text style={{ width: "50%" }}>
              Movie name
            </InputGroup.Text>
            <Form.Control aria-label="Amount (to the nearest dollar)" />
          </InputGroup>

          <InputGroup
            className="mb-3"
            ref={url}
            onChange={(e) => setMovie({ ...movie, Poster: e.target.value })}
          >
            <InputGroup.Text id="basic-addon3" style={{ width: "50%" }}>
              Movie poster URL
            </InputGroup.Text>
            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>

          <InputGroup
            className="mb-3"
            ref={rate}
            onChange={(e) => setMovie({ ...movie, Rating: e.target.value })}
          >
            <InputGroup.Text style={{ width: "50%" }}>
              Movie Rate
            </InputGroup.Text>
            <Form.Control aria-label="Amount (to the nearest dollar)" />
          </InputGroup>

          <InputGroup
            ref={description}
            onChange={(e) => setMovie({ ...movie, Plot: e.target.value })}
          >
            <InputGroup.Text style={{ width: "50%" }}>
              Movie description
            </InputGroup.Text>
            <Form.Control as="textarea" aria-label="With textarea" />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
