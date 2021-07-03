import React, { useState, useEffect } from 'react';
import Navv from './components/Navv/Navv';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ItemDetail from './pages/ItemDetail';
import CategoryDetail from './pages/CategoryDetail';
import AllCat from './components/AllCat/AllCat';

function App() {
  return (
    <div>



      <Router>
        <div className="App">
          <Navv brandname={" Nico ecommerce"} categoriauno={"Personajes de Better Call Saul"} categoriados={"Personajes de Breaking Bad"} categoriacuatro={"Catalogo completo"} />
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
