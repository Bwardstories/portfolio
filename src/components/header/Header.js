import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/icons/favicon.png";

const Header = () => {
  //  used bootstrap for Header and Links
  return (
    <Navbar variant="dark" expand="lg" className="headerNavbar">
      <Navbar.Brand href="/portfolio/#intro" className="logoLink">
        <img src={logo} alt="" className="logoIcon" />
        <span className="logoName"> BRIAN WARD</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="headerLinks">
          <Nav className="me-auto">
            <Nav.Link href="/portfolio/#aboutMe">About Me</Nav.Link>
            <Nav.Link href="/portfolio/#projectSection">Projects</Nav.Link>
            <Nav.Link href="/portfolio/resume">Resume</Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
