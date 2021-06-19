import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget.js'
import brand from './brand.png'

const Navv = ({ brandname, categoriauno, categoriados, categoriatres, categoriacuatro }) => (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><img
        alt=""
        src={brand}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{brandname}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      
      <NavDropdown title="Categorias" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">{categoriauno}</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">{categoriados}</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">{categoriatres}</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">{categoriacuatro}</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="¿Que quieres comprar?" className="mr-sm-2" />
      <Button variant="outline-success">Buscar</Button>
    </Form>
    <CartWidget />
  </Navbar.Collapse>
</Navbar>  
)

export default Navv
