import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { HomeRounded } from "@material-ui/icons";
import cvData from "../../data/cvData";
import "./Header.css";

export default function Header(props) {
  //const pathName = props?.location?.pathName;

  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to="/">
        <Navbar.Brand className={"header-home"}>
          <HomeRounded />
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
          <a href={cvData.social.github.link} target="_blank">
            {cvData.social.github.icon}
          </a>
          <a href={cvData.social.linkedin.link} target="_blank">
            {cvData.social.linkedin.icon}
          </a>
          <a href={cvData.social.twitter.link} target="_blank">
            {cvData.social.twitter.icon}
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
