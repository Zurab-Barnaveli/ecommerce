import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

type Params = {
  category: string;
  searchTerm: string;
};

const ProductListPage = () => {
  const { category, searchTerm } = useParams<Params>();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/products?search=${searchTerm || category}`
      );
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category, searchTerm]);

  return (
    <div>
      <h1>
        {category
          ? `Category: ${category}`
          : `Search results for "${searchTerm}"`}
      </h1>
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductListPage;
