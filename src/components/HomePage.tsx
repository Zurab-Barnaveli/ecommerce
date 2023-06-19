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

  const carouselProducts = [
    {
      id: 1,
      title: "Product 1",
      image: "https://img.zoommer.ge/zoommer-images/thumbs/0192904.png",
    },
    {
      id: 2,
      title: "Product 2",
      image: "https://img.zoommer.ge/zoommer-images/thumbs/0192756.png",
    },
    {
      id: 3,
      title: "Product 3",
      image: "https://img.zoommer.ge/zoommer-images/thumbs/0192906.png",
    },
    {
      id: 4,
      title: "Product 4",
      image: "https://img.zoommer.ge/zoommer-images/thumbs/0193564.png",
    },
    {
      id: 5,
      title: "Product 5",
      image: "https://img.zoommer.ge/zoommer-images/thumbs/0193562.png",
    },
  ];

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
        {carouselProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div>
              <img src={product.image} alt={product.title} />
            </div>
          </Link>
        ))}
      </Carousel>

      <section>
        <div className='categories'>
          <div className='navigation'>
            <img src='src\img\options-lines.png' />
            <h2>Navigation</h2>
          </div>
          {categories.map((brand) => (
            <Link to={`/brand/${brand}`} key={brand}>
              <div className='card'>
                <button>{brand}</button>
              </div>
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
    </div>
  );
};

export default HomePage;
