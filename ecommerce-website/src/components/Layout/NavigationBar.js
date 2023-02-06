import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <NavBar bg="dark" variant="dark" fixed="top">
        <Container className="justify-content-center ">
          <Nav style={{ fontSize: "120%" }}>
            <Link to="/home" className="me-5 navlink">
              Home
            </Link>
            <Link to="/" className="me-5 navlink">
              Store
            </Link>
            <Link to="/aboutus" className="me-5 navlink">
              About
            </Link>
            <Link to="/contactus" className="me-5 navlink">
              Contact Us
            </Link>
          </Nav>
        </Container>
      </NavBar>
    </>
  );
};

export default NavigationBar;
