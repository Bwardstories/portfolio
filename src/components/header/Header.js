import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/icons/favicon.png";

const Header = () => {
  return (
    <Navbar variant="dark" className="headerNavbar">
      <Navbar.Brand href="/#intro" className="logoLink">
        <img src={logo} alt="" className="logoIcon" />
        <span className="logoName"> BRIAN WARD</span>
      </Navbar.Brand>
      <div className="headerLinks">
        <Nav>
          <Nav.Link href="/#aboutMe">About Me</Nav.Link>
          <Nav.Link href="/#projectSection">Projects</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Header;