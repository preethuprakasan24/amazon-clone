import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SingleImageCard({ title, items }) {
  return (
    <>
       <Card style={{ width: "100%", padding: "10px" }} className="carousel-card my-3">
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Row className="mt-4">
            {items &&
              items.map((item, index) => (
                <Col key={index} className="d-flex justify-content-center">
                  <img src={item.img} alt="" width={"85%"} />
                </Col>
              ))}
          </Row>
          <Button variant="" style={{ fontSize: "12px" }} className="text-center">
            Shop now
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleImageCard;
