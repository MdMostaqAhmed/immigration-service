import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} height="30px" alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Service</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
