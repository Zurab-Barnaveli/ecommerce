import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
            E-Commerce
          </Link>
        </Typography>
        <Button color='inherit' component={Link} to='/products'>
          Products
        </Button>
        <Button color='inherit' component={Link} to='/cart'>
          Cart
        </Button>
        <Button color='inherit' component={Link} to='/admin'>
          Admin
        </Button>
        <Button color='inherit' component={Link} to='/profile'>
          Profile
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
