import CartContext from "./cart-context";
import { useState } from "react";

const CartProvider = (props) => {
  const [items, setUpdatedItems] = useState([]);
  const [price, setUpdatedPrice] = useState(0);
  const addItemtoCartHandler = (item) => {
    const existingId = cartContext.items.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingId >= 0) {
      const updatedItem = {
        ...item,
        quantity:
          Number(item.quantity) +
          Number(cartContext.items[existingId].quantity),
      };
      //console.log(updatedItem);
      const updatedItems = [...cartContext.items];

      updatedItems[existingId] = updatedItem;

      setUpdatedItems(updatedItems);

      const updatedAmount = cartContext.totalAmount + item.price;

      setUpdatedPrice(updatedAmount);
    } else {
      setUpdatedItems([item, ...items]);
      let updatedPrice = price + item.quantity * item.price;
      setUpdatedPrice(updatedPrice);
    }
  };
  const removeItemFromCartHandler = (id) => {
    const existingId = cartContext.items.findIndex((item) => item.id === id);

    const existingItem = cartContext.items[existingId];

    const updatedAmount = price - existingItem.price;

    setUpdatedPrice(updatedAmount);

    if (existingItem.quantity === 1) {
      const updatedItems = cartContext.items.filter((item) => item.id !== id);

      setUpdatedItems(updatedItems);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };

      const updatedItems = [...cartContext.items];

      updatedItems[existingId] = updatedItem;

      setUpdatedItems(updatedItems);
    }
  };
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
