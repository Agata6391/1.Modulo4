import React from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import { CssBaseline, Container } from "@mui/material";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Container>
        <AboutUs />
        <Services/>
      </Container>
    </div>
  );
};

export default App;
