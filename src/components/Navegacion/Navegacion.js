import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget.js';
import brand from './brand.png';
import { Link } from "react-router-dom";
import './Navegacion.css';


const Navegacion = ({ brandname, categoriauno, categoriados, categoriatres, categoriacuatro }) => {
  const linkuno = "Notebooks";
  const linkdos = "Accesorios";
  const linktres = "Celulares";
  const linkcuatro = "Monitores";

  return (
    <Navbar bg="light" expand="lg">
      <Link to="/">  <Navbar.Brand href="/"><img
        alt=""
        src={brand}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{brandname}</Navbar.Brand> </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
          <Nav.Link><Link to="/services">Servicios</Link></Nav.Link>


          <NavDropdown title="Catalogo" id="basic-nav-dropdown">

            <Nav.Link><Link to={`/category/${linkuno}`}>{categoriauno}</Link></Nav.Link>
            <Nav.Link><Link to={`/category/${linkdos}`}>{categoriados}</Link></Nav.Link>
            <Nav.Link><Link to={`/category/${linktres}`}>{categoriatres}</Link></Nav.Link>
            <Nav.Link><Link to={`/category/${linkcuatro}`}>{categoriacuatro}</Link></Nav.Link>



          </NavDropdown>

          <Nav.Link><Link to="/contact">Contacto</Link></Nav.Link>

        </Nav>

        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navegacion
