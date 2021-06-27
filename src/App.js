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



function App() {

  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch("https://breakingbadapi.com/api/characters?limit=180&offset=10")
      .then((response) => response.json())
      .then((json) => setItems(json));
      
  });

 
 
  return (
    
    <div>
    <Navv brandname={" Nico ecommerce"} categoriauno={"Comida"} categoriados={"Tecnologia"} categoriatres={"Deporte"} categoriacuatro={"Servicios"}/>
    
    <div>
      
      
        <ItemListContainer greeting={"¡Bienvenido!"} />
        
        
      
      


    <div>
      


  <div className="container-fluid">
    <div className="row">
      
{items.map(function(num){
   return <div className="col-md-3"><Item name={num.name} price={num.category} description={num.description} img={num.img}/></div>
  
})}      
    
    </div>
 </div>
 
</div>
      
          </div>
          
  </div>
      
  );
}

export default App;
