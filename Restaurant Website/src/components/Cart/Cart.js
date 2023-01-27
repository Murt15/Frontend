import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const addItemInCartHandler = (item) => {
    // console.log(item);
    cartCtx.addItem({ ...item, quantity: 1 });
  };
  const removeItemFromCartHandler = (id) => {
    // console.log(id);
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li className={classes["cart-items-li"]} key={item.id}>
          <div>
            <span className={classes["cart-items-li-name"]}>{item.name}</span>
            <button
              className={classes["cart-items-li-buttons"]}
              onClick={() => {
                addItemInCartHandler(item);
              }}
            >
              +
            </button>
            <button
              className={classes["cart-items-li-buttons"]}
              onClick={() => {
                removeItemFromCartHandler(item.id);
              }}
            >
              -
            </button>
          </div>
          <div className={classes["cart-items-div"]}>
            <span className={classes["cart-items-li-price"]}>
              {" "}
              ${item.price}
            </span>
            <span className={classes["cart-items-li-quantity"]}>
              x {item.quantity}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount :</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
