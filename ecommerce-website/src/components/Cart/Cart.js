import "./Cart.css";
import Button from "react-bootstrap/Button";
const Cart = (props) => {
  const removeFromCartHandler = () => {};
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ].map((products) => (
    <li className="cart-details-li" key={products.title}>
      {/* <span className="cart-details-img">
        <img src={products.imageUrl} alt="albumPhoto" />
      </span> */}
      <span className="cart-details-title cart-col"> {products.title}</span>
      <span className="cart-details-price cart-col">{products.price}</span>
      <span className="">{products.quantity}</span>
      <Button onClick={removeFromCartHandler}>Remove</Button>
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
