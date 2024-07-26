import React from "react";
import Header from "./components/Header";
import HHeader from "./components/HHeader";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonial";
import Portafolio from "./components/Portafolio";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import { CssBaseline, Container } from "@mui/material";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <HHeader/>
      <Container>
        
        <AboutUs />
        <Services/>
        <Testimonials/>
        <Portafolio/>
        <Contact/>
        <Footer/>


      </Container>
    </div>
  );
};

export default App;
