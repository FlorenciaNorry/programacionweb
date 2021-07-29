import React from "react";
import {Navbar,Nav, Container} from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Navegacion = () => {
  return (
    <Navbar className="principal" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='nav-link' to='/' exact={true}>Inicio</NavLink>
            <NavLink className='nav-link' to='/productos' exact={true}>Productos</NavLink>
            <NavLink className='nav-link' to='/producto/nuevo' exact={true}>Nuevo Producto</NavLink>
            <NavLink className='nav-link' to='/categorias' exact={true}>Categorias</NavLink>
            <NavLink className='nav-link' to='/categorias/nuevo' exact={true}>Nueva Categoria</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
