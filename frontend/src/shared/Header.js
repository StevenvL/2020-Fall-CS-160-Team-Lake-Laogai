import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import logo from "../images/pokeboba_logo.svg";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          src={logo}
          alt="Site Logo. PokeBoba"
          className="d-inline-block align-top"
        />{" "}
        Pokeboba
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <NavLink to="/">Home</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/forums">Forums</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/blogs">Blog</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/findStore">Find a store</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/owner">Store Owner View</NavLink>
          </Nav.Link>
        </Nav>
        <Button variant="outline">
          <NavLink to="/login">Log in</NavLink>
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
