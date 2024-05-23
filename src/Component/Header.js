import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Link to="/">
          <img src={logo} alt="Logo" width={110} />
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Switcher
            </Link>
            <Link to="/About" className="nav-link">
              About Me
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
