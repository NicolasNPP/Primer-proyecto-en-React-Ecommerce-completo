import React, { useState, useEffect } from 'react';
import Item from '../components/Item/Item';
import Navv from '../components/Navv/Navv';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemCount from '../components/ItemCount/ItemCount';
import { ItemList } from "../Data/ItemList";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Carrousel from '../components/Carrousel/Carrousel';
import axios from 'axios';


const Home = () => { 
    const [items, setItems] = useState([]);


    useEffect(() => {
      axios("https://breakingbadapi.com/api/characters?limit=180&offset=10").then((res) => 
setItems(res.data)
      );
        
        
    });
  
   
   
    return (
      
      <div>
      
      
      <div>
        

        <ItemListContainer greeting={"¡Bienvenido!"} />
          
          
        
        
  
  
      <div>
        
  
  
    <div className="container">
      <div className="row">
        
  {items.map(function(num){
     return <div className="col-md-3" key={num.char_id}><Link to={`/detail/${num.char_id}`}><Item name={num.name} price={num.category} description={num.description} img={num.img}/></Link></div>
    
  })}      
      
      </div>
   </div>
   
  </div>
        
            </div>
            
    </div>
        
    );
}


export default Home