import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCartStore } from "../store/cartStore";
import "./ProductPage.scss";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const addItem = useCartStore((state) => state.addItem);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/product/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <p>{product.brand}</p>
      <p>{product.rating}</p>
      <p>
        <img src={product.images[product.id]} />
      </p>
      <button onClick={() => addItem(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
