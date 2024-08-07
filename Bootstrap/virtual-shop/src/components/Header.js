import React from "react";
import { Navbar, Nav } from "react-bootstrap";
const Header =()=>(
    <Navbar bg="light" expand='lg'>
        <Navbar.Brand href="/">Tienda Virtual REX-ant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/productos">Productos</Nav.Link>
                <Nav.Link href="/carrito">Carrito</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;