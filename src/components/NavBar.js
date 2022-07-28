import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar classname="background" variant="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            San Cipriano
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="justify-content-end flex-grow-1 pe-3"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/"}>
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to={"/servicios"}>
                Servicios
              </Nav.Link>
              <Nav.Link as={Link} to={"/faq"}>
                Preguntas Frecuentes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
