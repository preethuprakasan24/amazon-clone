import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CardItem({ title, items }) {
  return (
    <>
      <Card style={{ width: "100%", padding:"10px" }} className="carousel-card ">
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title>{title}</Card.Title>
          <Row className="mt-4 ">
            {items.map((item, index) => (
              <Col key={index} className="">
                <img src={item.img} alt="" width={"100px"} />
                <p>{item.label}</p>
              </Col>
            ))}
          </Row>
          <Button variant="" style={{ fontSize: "12px" }}>
            See More
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardItem;
