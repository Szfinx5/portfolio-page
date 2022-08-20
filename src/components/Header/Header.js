import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { HomeRounded } from "@material-ui/icons";
import cvData from "../../data/cvData";

export default function Header(props) {
  const pathName = props?.location?.pathName;

  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to="/">
        <Navbar.Brand className={"header-home"}>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav>
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header-link-active" : "header-link"}
          >
            About me
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to="/education"
            className={
              pathName == "/education" ? "header-link-active" : "header-link"
            }
          >
            Education
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to="/experience"
            className={
              pathName == "/experience" ? "header-link-active" : "header-link"
            }
          >
            Experience
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName == "/portfolio" ? "header-link-active" : "header-link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className="header-right">
          <a href={cvData.social.github.link} target="_blank">
            {cvData.social.github.icon}
          </a>

          {/* title="GitHub" text={cvData.social.github.text}
          link={cvData.social.github.link}
          title="LinkedIn" text={cvData.social.linkedin.text}
          link={cvData.social.linkedin.link}
          title="Twitter" text={cvData.social.twitter.text}
          link={cvData.social.twitter.link} */}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
