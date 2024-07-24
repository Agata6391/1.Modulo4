import React from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonial";
import Portafolio from "./components/Portafolio";
import { CssBaseline, Container } from "@mui/material";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Container>
        <AboutUs />
        <Services/>
        <Testimonials/>
        <Portafolio/>

      </Container>
    </div>
  );
};

export default App;
