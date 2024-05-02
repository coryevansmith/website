import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./home";
import Resume from "./resume";
import logo from "./resources/logo.png";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              src={logo}
              alt="Logo"
              style={{ marginRight: "10px", height: "50px" }}
            />
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/resume">
            Resume
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
