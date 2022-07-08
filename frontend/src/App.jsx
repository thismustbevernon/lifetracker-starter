import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Navbar from "./components/Navbar/Navbar";

import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      {
        <>
          <Navbar />
          <Container
            maxWidth={false}
            sx={{ backgroundColor: "orange", flexGrow: 1 }}
          >
        
            container
          </Container>
        </>
      }
    </div>
  );
}

export default App;
