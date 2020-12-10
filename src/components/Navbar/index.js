import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Icon from "../Navbar/imdb.png";
import IconReact from "../Navbar/react.gif";

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Icon}
            width="140"
            height="60"
            style={{ margin: 0, padding: 0 }}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Nav>
          <img
            alt=""
            src={IconReact}
            width="140"
            height="60"
            className="d-inline-block align-top"
          />
        </Nav>
      </Navbar>
    </>
  );
}

export default NavigationBar;

// <div>
//     <Link to="/">HOME</Link>
// </div>
