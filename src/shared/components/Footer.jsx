import React from "react";
import { Container, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: "lightgray",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth='sm'>
        <Typography variant='body1'>E-Commerce © 2023</Typography>
        <Link color='inherit' href='/privacy-policy'>
          Privacy Policy
        </Link>
        {" | "}
        <Link color='inherit' href='/terms-of-service'>
          Terms of Service
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
