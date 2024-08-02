import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product, addToCard }) => (
  <Card style={{ width: "18 rem" }}>
    <Card.body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>{product.price}</Card.Text>
      <Button variant="primary" onClick={() => addToCard(product)}>
        Agregar al carrito{" "}
      </Button>
    </Card.body>
  </Card>
);
export default ProductCard;
