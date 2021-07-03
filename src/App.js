import logo from './logo.svg';
//import './App.css';
import React, { useState, useEffect } from 'react';
import Item from './components/Item/Item';
import Navv from './components/Navv/Navv';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { ItemList } from "./Data/ItemList";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ItemDetail from './pages/ItemDetail';
import CategoryDetail from './pages/CategoryDetail';
import AllCat from './components/AllCat/AllCat';








function App() {
return(
<div>



<Router>
<div className="App">
<Navv brandname={" Nico ecommerce"} categoriauno={"Personajes de Better Call Saul"} categoriados={"Personajes de Breaking Bad"} categoriacuatro={"Catalogo completo"}/>
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/contact" component={Contact} />
  <Route path="/services" component={Services} />
  <Route path="/detail/:id" component={ItemDetail} />
  <Route path="/category/breaking+bad+bettercallsaul" component={AllCat} />
  <Route path="/category/:id" component={CategoryDetail} />
  
  

</Switch>
</div>

</Router>
</div>
    )
}

export default App;
