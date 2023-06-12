import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HomePage.scss";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);

  const fetchProducts = async () => {
    try {
      const response = await axios.post("http://localhost:8080/products", {
        page_size: 9,
        page_number: page,
        keyword: searchTerm,
      });
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);
  console.log(page);

  const categories = [...new Set(products.map((product) => product.brand))];

  return (
    <div className='home-page container'>
      <Carousel autoPlay interval={2000} infiniteLoop>
        {products.slice(0, 5).map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div>
              <img src={product.images[0]} alt={product.title} />
              <p className='legend'>{product.title}</p>
            </div>
          </Link>
        ))}
      </Carousel>

      <section>
        <h2>Categories</h2>
        <div>
          {categories.map((brand) => (
            <Link to={`/brand/${brand}`} key={brand}>
              <button>{brand}</button>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h1>Product List</h1>
        <div className='row'>
          {products.map((product) => (
            <div className='col-md-4' key={product.id}>
              <Link to={`/product/${product.id}`}>
                <div className='card'>
                  <img
                    src={product.images[product.id]}
                    alt={product.title}
                    className='card-img-top'
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>{product.title}</h5>
                    <p className='card-text'>{product.price}</p>
                    <p className='card-text'>{product.category}</p>
                    <p className='card-text'>{product.brand}</p>
                    <p className='card-text'>{product.rating}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className='d-flex justify-content-between my-4'>
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className='btn btn-primary'
          >
            Previous Page
          </button>
          <button onClick={() => setPage(page + 1)} className='btn btn-primary'>
            Next Page
          </button>
        </div>
      </section>

      <footer></footer>
    </div>
  );
};

export default HomePage;
