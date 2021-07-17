import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget.js';
import brand from './brand.png';
import { Link } from "react-router-dom";

const Navegacion = ({ brandname, categoriauno, categoriados, categoriatres, categoriacuatro }) => {
  const linkuno = "Better+Call+Saul";
  const linkdos = "Breaking+Bad";

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"><img
        alt=""
        src={brand}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{brandname}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
          <Nav.Link><Link to="/services">Servicios</Link></Nav.Link>


          <NavDropdown title="Categorias" id="basic-nav-dropdown">

            <Nav.Link><Link to={`/category/${linkuno}`}>{categoriauno}</Link></Nav.Link>
            <Nav.Link><Link to={`/category/${linkdos}`}>{categoriados}</Link></Nav.Link>

            <NavDropdown.Divider />
            <Nav.Link><Link to={"/category/breaking+bad+bettercallsaul"}>{categoriacuatro}</Link></Nav.Link>

          </NavDropdown>

          <Nav.Link><Link to="/contact">Contacto</Link></Nav.Link>

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="¿Que quieres comprar?" className="mr-sm-2" />
          <Button variant="outline-success">Buscar</Button>
        </Form>
        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navegacion
