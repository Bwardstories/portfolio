import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/icons/favicon.png";

const Header = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/resume");
    window.scrollTo(0, 0);
  };

  return (
    <Navbar variant="dark" className="headerNavbar">
      <Navbar.Brand href="/portfolio/#intro" className="logoLink">
        <img src={logo} alt="" className="logoIcon" />
        <span className="logoName"> BRIAN WARD</span>
      </Navbar.Brand>
      <div className="headerLinks">
        <Nav>
          <Nav.Link href="/portfolio/#aboutMe">About Me</Nav.Link>
          <Nav.Link href="/portfolio/#projectSection">Projects</Nav.Link>
          <button onClick={handleClick}>Resume</button>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Header;
