import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product, addToCard }) => (
  <Card style={{ width: "18 rem" }}>
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>{product.price}</Card.Text>
      <Button variant="primary" onClick={() => addToCard(product)}>
        Agregar al carrito{" "}
      </Button>
    </Card.Body>
  </Card>
);
export default ProductCard;
