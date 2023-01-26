import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCart.module.css";
const HeaderCartBtn = (props) => {
  const cartCtx = useContext(CartContext);
  // const numberofCartItems = cartCtx.items.reduce((currNumber, item) => {
  //   return currNumber + item.amount;
  // }, 0);
  let numberofCartItems = 0;

  cartCtx.items.forEach((item) => {
    numberofCartItems = numberofCartItems + Number(item.quantity);
  });
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart </span>
      <span className={classes.badge}>{numberofCartItems}</span>
    </button>
  );
};

export default HeaderCartBtn;
