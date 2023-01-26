import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setUpdatedItems] = useState([]);
  const [price, setUpdatedPrice] = useState(0);
  const addItemtoCartHandler = (item) => {
    setUpdatedItems([...items, item]);
    let updatedPrice = price + item.quantity * item.price;
    setUpdatedPrice(updatedPrice);
  };
  const removeItemFromCartHandler = (id) => {};
  const cartContext = {
    items: items,
    totalAmount: price,
    addItem: addItemtoCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
