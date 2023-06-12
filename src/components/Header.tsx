import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <header>
      <form onSubmit={handleSearch} className='my-4'>
        <div className='input-group'>
          <input
            type='text'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder='Search for products...'
            className='form-control'
          />
          <button type='submit' className='btn btn-primary'>
            Search
          </button>
        </div>
      </form>
      <h1>My Ecommerce Site</h1>
    </header>
  );
};

export default Header;
