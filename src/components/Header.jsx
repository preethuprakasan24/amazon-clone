import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row className=" px-3 d-flex" style={{ backgroundColor: "#0f1111" }}>
        <Col className=" d-flex firstCol w-25">
          <div className="logoBox">
            <img
              className="headerLogo"
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="logo"
            />
            <span className="logoText">.in</span>
          </div>
          <div className="locationContainer d-flex align-items-center ms-3">
            <div className="locationIcon">
              <img
                className="pb-4"
                src="https://m.media-amazon.com/images/G/31/gno/sprites/nav-sprite-global-2x-reorg-privacy._CB600086755_.png"
                alt=""
              />
            </div>
            <div className="userInfoBox">
              <span className="deliverTo text-light">
                <b>Deliver to user</b>
              </span>

              <span className="deliveryLocation text-light">
                Update location
              </span>
            </div>
          </div>
        </Col>
        <Col
          className="secondCol d-flex align-items-center justify-content-center mt-3"
          xs={6}
        >
          <InputGroup className="mb-3 w-100 ">
            <DropdownButton
              variant="light"
              title="All"
              id="input-group-dropdown-1"
              className="dropdownBtn"
              style={{
                backgroundColor: "#ff5733",
                border: "light",
                fontSize: "12px",
              }}
            >
              <Dropdown.Item href="#">All Categories</Dropdown.Item>
              <Dropdown.Item href="#">Alexa Skills</Dropdown.Item>
              <Dropdown.Item href="#">Amazon Devices</Dropdown.Item>
              <Dropdown.Item href="#">Amazon Fashion</Dropdown.Item>
              <Dropdown.Item href="#">Amazon Fresh</Dropdown.Item>
              <Dropdown.Item href="#">Amazon Pharmacy</Dropdown.Item>
            </DropdownButton>
            <Form.Control
              aria-label="Text input with dropdown button"
              placeholder="Search Amazon.in"
              style={{ fontSize: "12px" }}
            />
            <Button
              variant="outline-light bg-warning text-dark"
              id="button-addon2 searchIcon"
              style={{ fontSize: "12px" }}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </InputGroup>
        </Col>
        <Col className=" thirdCol">
          <div className="row">
            <div className="col-md-3">
              <button
                className="btn dropdown-toggle languageBtn"
                type="button"
                aria-expanded="false"
              >
                <img
                  className="flagIcon"
                  src="https://cdn.countryflags.com/thumbs/india/flag-400.png"
                  alt=""
                />
                <span className="languageCode text-light">
                  <b>EN</b>
                </span>
              </button>
            </div>
            <div className="col-md-3 signin d-flex justify-content-center align-items-center">
              <Link to="/signin">
                <button className="btn  dropdown-toggle languageBtn">
                  <span style={{ fontSize: "12px" }} className="text-light">
                    <b>Hello, Sign in </b>
                  </span>
                  <br />
                  <span className="languageCode text-light">
                    <b>Account & Lists</b>
                  </span>
                </button>
              </Link>
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <Link to='/signin'>
                <a
                  className="btn dropdown-toggle languageBtn"
                  type="button"
                  aria-expanded="false"
                >
                  <span className="text-light">
                    <b>Returns & </b>
                  </span>
                  <br />
                  <span className="languageCode text-light">
                    <b>Orders</b>
                  </span>
                </a>
              </Link>
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <FontAwesomeIcon
                icon={faCartShopping}
                size="xl"
                style={{ color: "white" }}
              />
              <Link to="/cart">
                <span className="fs-5 ms-2">
                  <b className="text-light">Cart</b>
                </span>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Navbar
        data-bs-theme="dark"
        className="bg-dark px-3"
        style={{ height: "40px" }}
      >
        <Button variant="" onClick={handleShow}>
          <FontAwesomeIcon icon={faBars} className="pe-2" />
        </Button>

        <Navbar.Brand href="#home">All</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home" className="items">
            Today's Deals
          </Nav.Link>
          <Nav.Link href="#features" className="items">
            Customer Service
          </Nav.Link>
          <Nav.Link href="#pricing" className="items">
            Registry
          </Nav.Link>
          <Nav.Link href="#pricing" className="items">
            Gift Cards
          </Nav.Link>
          <Nav.Link href="#pricing" className="items">
            Sell
          </Nav.Link>
        </Nav>
      </Navbar>

      <Modal className="left" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">
            <Link to="/signin">
              <button className="btn">
                <b>Hello, Sign in</b>
              </button>
            </Link>
          </Modal.Title>
        </Modal.Header>
        <Modal.Header>
          <Modal.Title className="fs-5">Digital Content & Devices</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Amazon Music</p>
          <p>Amazon App Store</p>
        </Modal.Body>

        <Modal.Header>
          <Modal.Title className="fs-5">Digital Content & Devices</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Amazon Music</p>
          <p>Amazon App Store</p>
        </Modal.Body>

        <Modal.Header>
          <Modal.Title className="fs-5">Digital Content & Devices</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Amazon Music</p>
          <p>Amazon App Store</p>
        </Modal.Body>
        <Modal.Header>
          <Modal.Title className="fs-5">Digital Content & Devices</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Amazon Music</p>
          <p>Amazon App Store</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;
