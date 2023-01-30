import "./Cart.css";
import Button from "react-bootstrap/Button";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const removeFromCartHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartElements = cartCtx.items.map((products) => (
    <li className="cart-details-li" key={products.id}>
      <span>
        <img src={products.imageUrl} alt="ph" />
      </span>
      <span className="cart-details-li-title"> {products.title}</span>
      <span className="cart-details-li-price">{products.price}</span>
      <span className="">
        {products.quantity}{" "}
        <Button
          onClick={() => {
            removeFromCartHandler(products.id);
          }}
          className="btn"
        >
          Remove
        </Button>
      </span>
    </li>
  ));
  return (
    <div className="cart-div">
      <Button variant="outline-dark" onClick={props.onClose}>
        X
      </Button>
      <h1>Cart</h1>
      <ul className="cart-list">
        <li className="cart-list_item">Item</li>
        <li className="cart-list_price">Price</li>
        <li className="cart-list_quantity">Quantity</li>
      </ul>
      {cartElements}
    </div>
  );
};
export default Cart;
