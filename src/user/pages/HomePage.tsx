// src/user/pages/HomePage.tsx

import React, { useState, useEffect } from "react";
import { getProducts } from "../../services/apiService";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts("", 10, 0); // Fetch 10 products
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products");
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {error && <p>{error}</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
