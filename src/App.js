import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import About from "./about";
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
              style={{
                marginTop: ".5rem",
                marginBottom: ".5rem",
                height: "50px",
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
      <div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
