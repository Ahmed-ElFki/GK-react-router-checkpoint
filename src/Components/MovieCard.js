import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function MovieCard({ Title, Description, posterURL, Rate }) {
  return (
    <Col lg={3} md={4} sm={6} xs={12}>
      <Card style={{ height: "100%" }}>
        <Card.Img variant="top" src={posterURL} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Text>{Description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MovieCard;
