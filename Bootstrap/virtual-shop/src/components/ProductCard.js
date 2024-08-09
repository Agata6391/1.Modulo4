import React, {useContext}from "react" ;
import { Card, Button } from "react-bootstrap";
import { CardContext } from "../Context/CardContext";
import Carrito from "../Pages/Carrito";


const ProductCard = ({ product }) => {
  const {addToCart}= useContext(CardContext);
  return (
  <Card style={{ width: "18 rem", margin: "10px" }}>
    <Card.Img variant="top" src={product.image} alt={product.title} style={{widht:"80px", padding:"10px", height:"200px" , objectFit:"scale-down"}}/>
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>${product.price}</Card.Text>
      <Button variant="primary" onClick={() => addToCart(product)}>
        Agregar al carrito{""}
      </Button>
    </Card.Body>
  </Card>
 );
};
export default ProductCard;





// import React from "react";
// import { Card, Button } from "react-bootstrap";
// import { CardContext } from "../Context/CardContext";

// const ProductCard = ({ product, addToCart }) => (
//   <Card style={{ width: "18 rem" }}>
//     <Card.Body>
//       <Card.Title>{product.name}</Card.Title>
//       <Card.Text>{product.price}</Card.Text>
//       <Button variant="primary" onClick={() => addToCart(product)}>
//         Agregar al carrito{" "}
//       </Button>
//     </Card.Body>
//   </Card>
// );
// export default ProductCard;

