import React, { useState, useEffect } from "react";
import { fetchProducts } from "../Services/api";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetchProducts().then(response => setProductos(response.data));
  }, []);
  const filteredProducts = productos.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar Producto..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredProducts.map(product => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <img src={product.image} alt="aqui deberia estar una imagen" />
          </div>
        ))}
      </div>
    </div>
  );
};
 export default Productos;