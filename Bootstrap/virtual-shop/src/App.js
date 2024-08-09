import React from 'react';
import { CartProvide } from './Context/CardContext';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from './components/footer';
import Header from './components/Header';
import Carrito from './Pages/Carrito';
import Inicio from './Pages/Inicio';
import Productos from './Pages/Productos';


const App =()=>(
  <CartProvide>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
       
      </Routes>
      <Footer/>
    
    </Router>
  </CartProvide>
   
  );


export default App;
