import { useState } from "react";
import CartProvider from "../store/CartProvider";
import Cart from "../components/Cart/Cart";
import NavigationBar from "../components/Layout/NavigationBar";
import Music from "../components/Music/Music";
import Footer from "../components/Layout/Footer";
const Store = () => {
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
      <NavigationBar onShowCart={showCartHandler} />
      <Music />
      <Footer />
    </CartProvider>
  );
};
export default Store;
