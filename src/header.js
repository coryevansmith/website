import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import logo from "./resources/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              marginTop: "1vh",
              marginBottom: ".5vw",
              height: "3vh",
            }}
          />
        </Typography>
        <Button color="inherit" component={Link} to="/">
          About
        </Button>
        <Button color="inherit" component={Link} to="/resume">
          Resume
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
