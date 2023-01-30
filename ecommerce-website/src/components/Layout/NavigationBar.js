import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Header from "./Header";
import Button from "react-bootstrap/Button";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const NavigationBar = (props) => {
  const cartCtx = useContext(CartContext);
  let numberofCartItems = 0;

  cartCtx.items.forEach((item) => {
    numberofCartItems = numberofCartItems + Number(item.quantity);
  });
  return (
    <>
      <NavBar bg="dark" variant="dark" fixed="top">
        <Container className="justify-content-center ">
          <Nav style={{ fontSize: "120%" }}>
            <Nav.Link href="" className="me-5">
              Home
            </Nav.Link>
            <Nav.Link href="" className="me-5">
              Store
            </Nav.Link>
            <Nav.Link href="" className="me-5">
              About
            </Nav.Link>
          </Nav>
        </Container>
        <Button
          variant="outline-light"
          style={{ marginRight: "10px" }}
          onClick={props.onShowCart}
        >
          Cart {numberofCartItems}
        </Button>
      </NavBar>

      <Header />
    </>
  );
};

export default NavigationBar;
