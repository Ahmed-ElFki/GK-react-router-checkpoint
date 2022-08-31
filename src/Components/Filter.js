import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import AddMovie from "./AddMovie";

function Filter() {
  return (
    <>
      <Container style={{ fontFamily: "Fira Code", marginTop: "30px" }}>
        <Row>
          <Col lg={10} md={10} sm={10} xs={10}>
            <InputGroup className="mb-3">
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
