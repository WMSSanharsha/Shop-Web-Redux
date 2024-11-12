import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { remove } from "../store/cartSlice";

function Cart() {
  const productCart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  function removeToCart(id) {
    // dispatch remove

    dispatch(remove(id));
  }

  const cards = productCart.map((product) => (
    <div className="col-md-6" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100">
        <div className="">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>LKR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            Remove
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return <div className="row">{cards}</div>;
}

export default Cart;
