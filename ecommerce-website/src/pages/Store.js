import { useState, useContext } from "react";
import CartProvider from "../store/CartProvider";
import Cart from "../components/Cart/Cart";
import NavigationBar from "../components/Layout/NavigationBar";
import Music from "../components/Music/Music";
import Footer from "../components/Layout/Footer";
import CartContext from "../store/cart-context";
import Button from "react-bootstrap/Button";
import "./Store.css";
const Store = () => {
  const cartCtx = useContext(CartContext);
  let numberofCartItems = 0;

  cartCtx.items.forEach((item) => {
    numberofCartItems = numberofCartItems + Number(item.quantity);
    console.log(numberofCartItems);
  });
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const HideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onClose={HideCartHandler} />}
      <div className="btn-div">
        <Button
          variant="primary"
          className="cart-btn"
          onClick={showCartHandler}
        >
          Cart
        </Button>
        <span className="cart-quantity">{numberofCartItems}</span>
      </div>
      <NavigationBar onShowCart={showCartHandler} />

      <Music />
      <Footer />
    </CartProvider>
  );
};
export default Store;
