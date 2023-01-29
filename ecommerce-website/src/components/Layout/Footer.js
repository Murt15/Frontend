import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <NavBar bg="primary" variant="dark" fixed="bottom">
      <Container className="justify-content-center">
        <NavBar.Brand style={{ fontSize: "200%" }} className="me-5">
          The Generics
        </NavBar.Brand>
        <Nav>
          <Nav.Link className="me-3">
            <img
              src="https://w7.pngwing.com/pngs/936/468/png-transparent-youtube-logo-youtube-logo-computer-icons-subscribe-angle-rectangle-airplane.png"
              width="30"
              height="30"
              alt="Youtube Logo"
            />
          </Nav.Link>
          <Nav.Link className="me-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/2048px-Spotify_App_Logo.svg.png"
              width="30"
              height="30"
              alt="Spotify Logo"
            />
          </Nav.Link>
          <Nav.Link>
            <img
              src="https://www.citypng.com/public/uploads/preview/-11595349592mdhzsfgakx.png"
              width="30"
              height="30"
              alt="Facebook Logo"
            />
          </Nav.Link>
        </Nav>
      </Container>
    </NavBar>
  );
};

export default Footer;
