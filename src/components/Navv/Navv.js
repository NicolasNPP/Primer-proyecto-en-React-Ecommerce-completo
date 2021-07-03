import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget.js';
import brand from './brand.png';
import { Link } from 'react-router-dom';

const Navv = ({ brandname, categoriauno, categoriados, categoriatres, categoriacuatro }) => {
  let linkuno = "Better+Call+Saul";
  let linkdos = "Breaking+Bad";
  let linktres = "=";

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
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/services">Servicios</Nav.Link>

          <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <NavDropdown.Item href={`/category/${linkuno}`}>{categoriauno}</NavDropdown.Item>
            <NavDropdown.Item href={`/category/${linkdos}`}>{categoriados}</NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item href={"/category/breaking+bad+bettercallsaul"}>{categoriacuatro}</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/contact">Contacto</Nav.Link>

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

export default Navv
