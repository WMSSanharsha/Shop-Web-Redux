import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productsSlice";

function Product() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.products);

  const products = data;

  useEffect(() => {
    // dispatch an action for fetchProducts
    dispatch(getProducts());
  }, []);

  function addToCart(product) {
    // dispatch an add action
    dispatch(add(product));
  }

  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
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
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
}

export default Product;
