import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
export default function Madnav() {
  return (
    <Navbar sticky="top" variant="dark" expand="lg">
      <Container className="navbar">
        <Navbar.Brand as={Link} to="">
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
              <Nav.Link as={Link} to="/whoweare">
                Biz Kimiz
              </Nav.Link>
              <Nav.Link as={Link} to="/gallery">
                Galeri
              </Nav.Link>
              <NavDropdown title="Oyunlar" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/gta5">
                  GTA 5
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/rdr2">
                  RDR 2
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/joinus">
                Bize Katıl
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
