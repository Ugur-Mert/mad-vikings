import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function Madnav() {
  return (
    <Navbar fluid sticky="top" variant="dark" expand="lg">
      <Container fluid className="navbar">
        <Navbar.Brand href="#home">
          <Image
            fluid
            className="nav-image"
            src="https://media.discordapp.net/attachments/691355043848388659/966838551541059656/Centercrest_kopya.png?width=703&height=670"
            alt="navimage"
          />
          MAD VIKINGS
        </Navbar.Brand>

        <div className="navbar-buttons">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto hamburger">
              <Nav.Link href="#home">Biz Kimiz</Nav.Link>
              <Nav.Link href="#link">Galeri</Nav.Link>
              <NavDropdown title="Oyunlar" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">GTA 5</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">RDR 2</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Bize Katıl</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
