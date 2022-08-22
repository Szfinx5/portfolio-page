import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import HomeIcon from "@mui/icons-material/Home";
import data from "../../data/data";
import "./Header.css";

export default function Header(props) {
  //const pathName = props?.location?.pathName;

  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to="/">
        <Navbar.Brand className={"header-home"}>
          <HomeIcon />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header-left">
          <Nav.Link as={NavLink} to="/" className={"header-link"}>
            About me
          </Nav.Link>

          <Nav.Link as={NavLink} to="/education" className={"header-link"}>
            Education
          </Nav.Link>

          <Nav.Link as={NavLink} to="/experience" className={"header-link"}>
            Experience
          </Nav.Link>

          <Nav.Link as={NavLink} to="/portfolio" className={"header-link"}>
            Portfolio
          </Nav.Link>
        </Nav>

        <div className="header-right">
          <a href={data.social.github.link} target="_blank" rel="noreferrer">
            {data.social.github.icon}
          </a>
          <a href={data.social.linkedin.link} target="_blank" rel="noreferrer">
            {data.social.linkedin.icon}
          </a>
          <a href={data.social.twitter.link} target="_blank" rel="noreferrer">
            {data.social.twitter.icon}
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
