import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import HomeIcon from "@mui/icons-material/Home";
import data from "../../data/data";
import "./Header.css";

export default function Header(props) {
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
          <a href={data.social.email.link} target="_blank" rel="noreferrer">
            {data.social.email.icon}
          </a>
          <a href={data.social.linkedin.link} target="_blank" rel="noreferrer">
            {data.social.linkedin.icon}
          </a>
          <a
            href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            title="WhatsApp"
          >
            {data.social.whatsapp.icon}
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
