import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Music.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import { Link } from "react-router-dom";
const MusicComponent = (props) => {
  const cartCtx = useContext(CartContext);
  const addItemtoCartHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };
  return (
    <div className="music-div-component">
      {props.items.map((music) => (
        <Card className="music-div-card" key={music.id}>
          <Card.Title>{music.title}</Card.Title>
          <Link to={`/product/:${music.id}`}>
            <Card.Img src={music.imageUrl} />
          </Link>

          <div>
            <span>
              <Card.Text style={{ fontSize: "130%" }}>{music.price}</Card.Text>
            </span>
            <span>
              <Button
                variant="primary"
                className="justify-content-end"
                onClick={() => {
                  addItemtoCartHandler(music);
                }}
              >
                Add to Cart
              </Button>
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};
export default MusicComponent;
