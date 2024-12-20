import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "../../utility/Button/Button";
import "./Navbar.css";

const NavBarSite = () => {
  return (
    <>
      {/* NavBar */}
      <Navbar expand="lg">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="#home">
            <img src="../../../../public/images/logos/logo.svg" alt="" />
          </Navbar.Brand>
          {/* Navbar Items */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-center"
            id="basic-navbar-nav"
          >
            <Nav className="">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">About Us</Nav.Link>
              <Nav.Link href="#home">Properties</Nav.Link>
              <Nav.Link href="#home">Services</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="contact">
            <Button buttonType="outline" color="grey-8">
              Contact Us
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarSite;
