import React from "react";
import { Nav, Navbar, Image, NavDropdown, Container } from "react-bootstrap";
import "./Navbar.css";
import Logo from "../../Resources/logo.PNG";

export const NavigationBar = () => (
  <div className="main-div">
    <Navbar>
      <Container className="width">
        <Navbar.Brand style={{ fontWeight: "bold" }} href="/">
          <div style={{ display: "flex" }}>
            <Image className="logo_style" src={Logo} alt="logo" height="28" />
            Instaread
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link className="text_weight" href="#discover">
              Discover
            </Nav.Link>
            <Nav.Link className="text_weight" href="#search">
              Search
            </Nav.Link>
            <Nav.Link className="highlighted_text" href={"/"}>
              Try Instaread now!
            </Nav.Link>
            <NavDropdown
              className="text_weight"
              title="Login"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#login">Login</NavDropdown.Item>
              <NavDropdown.Item href="#forgot">
                Forgot Password
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);
