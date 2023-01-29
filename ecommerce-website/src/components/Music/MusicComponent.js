import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Music.css";
const MusicComponent = (props) => {
  return (
    <div className="music-div-component">
      {props.items.map((music) => (
        <Card className="music-div-card">
          <Card.Title>{music.title}</Card.Title>
          <Card.Img src={music.imageUrl} />
          <div>
            <span>
              <Card.Text style={{ fontSize: "130%" }}>{music.price}</Card.Text>
            </span>
            <span>
              <Button variant="primary" className="justify-content-end">
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
