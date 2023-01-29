import { useState } from "react";
import NavigationBar from "./components/Layout/NavigationBar";
import Footer from "./components/Layout/Footer";
import Music from "./components/Music/Music";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const HideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <>
      {showCart && <Cart onClose={HideCartHandler} />}
      <NavigationBar onShowCart={showCartHandler} />
      <Music />
      <Footer />
    </>
  );
};

export default App;
