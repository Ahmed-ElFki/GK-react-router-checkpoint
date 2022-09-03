import React from "react";
import { Button, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function MovieCard({ Id, Title, Description, posterURL, Rate }) {
  let yellowStars = new Array(Rate).fill(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#FEDB39"
      className="bi bi-star-fill"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );

  let greyStars = new Array(5 - Rate).fill(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-star-fill"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );

  let allStars = [...yellowStars, ...greyStars];

  return (
    <Col lg={3} md={4} sm={6} xs={12} style={{ marginBottom: "15px" }}>
      <Card style={{ height: "100%" }}>
        <Card.Img variant="top" src={posterURL} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Text>{Description}</Card.Text>
          <Card.Text>{allStars}</Card.Text>
        </Card.Body>
        <Button>
          <Link
            to={`/${Id}/${Title.replaceAll(" ", "-")}`}
            style={{
              pointer: "Cursor",
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            Preview Trailer
          </Link>
        </Button>
      </Card>
    </Col>
  );
}

export default MovieCard;
