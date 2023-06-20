// src/user/pages/ProductDetailsPage.tsx

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/apiService";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(productId);
        setProduct(response.data);
      } catch (err) {
        setError("Failed to fetch product details");
      }
    };
    fetchProduct();
  }, [productId]);

  return (
    <div>
      {error && <p>{error}</p>}
      {product && (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Brand: {product.brand}</p>
          <p>Price: ${product.price}</p>
          {/* Add more product details here */}
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
