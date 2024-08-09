import React, { useState, useEffect } from "react";
import { fetchProducts } from "../Services/api";
import ProductCard from "../components/ProductCard";

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
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
          // <div key={product.id}>
          //   <h5>{product.title}</h5>
          //   <p>${product.price}</p>
          //   <img src={product.image} alt="aqui deberia estar una imagen" width="120px"/>
          // </div>
        ))}
      </div>
    </div>
  );
};
 export default Productos;