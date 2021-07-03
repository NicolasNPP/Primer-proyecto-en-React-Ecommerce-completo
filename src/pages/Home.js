import React, { useState, useEffect } from 'react';
import Item from '../components/Item/Item';
import Saludo from '../components/Saludo/Saludo';
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
        

        <Saludo greeting={"¡Hola! Compra tu personaje favorito."} />
          
          
        
        
  
  
      <div>
        
  
  
    <div className="container">
      <div className="row">
        
  {items.map(function(num){
     return <div className="col-md-3" key={num.char_id}><Item name={num.name} price={`$${num.char_id}`} category={num.category} description={num.description} id={num.char_id} img={num.img}/></div>
    
  })}      
      
      </div>
   </div>
   
  </div>
        
            </div>
            
    </div>
        
    );
}


export default Home