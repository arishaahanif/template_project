import React from "react";
import "../../assets/scss/Navbar.scss";
import { Container, ListGroup, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/images/Logo_1.png"
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Navbars = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} width={135} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Podcasts</Nav.Link>
            <Nav.Link href="#link">Host</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#link">
              <ListGroup horizontal>
                <ListGroup.Item>
                  <FaFacebookF />
                </ListGroup.Item>
                <ListGroup.Item>
                  <FaLinkedinIn />
                </ListGroup.Item>
                <ListGroup.Item>
                  <FaInstagram />
                </ListGroup.Item>
              </ListGroup>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
