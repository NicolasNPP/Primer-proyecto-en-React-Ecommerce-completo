import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Item from './components/Item/Item';
import Navv from './components/Navv/Navv';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { ItemList } from "./Data/ItemList";



function App() {

  const [items, setItems] = useState([]);

  useEffect(()=>{
  setTimeout(() => {
    setItems(ItemList);
    
  }, 2000);
    
  


;



  })
  return (
    <div>
    <Navv brandname={" Nico ecommerce"} categoriauno={"Comida"} categoriados={"Tecnologia"} categoriatres={"Deporte"} categoriacuatro={"Servicios"}/>
    
    <div>
      
      <div>
        <ItemListContainer greeting={"¡Bienvenido!"} />
        
        
      </div>
      


    <div className="cards-container">
      

{items.map(function(num){
  return <div key={num.id}><Item name={num.nombre} price={num.price} description={num.description} img={"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17a222cd390%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17a222cd390%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.0078125%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"}/>       </div>
  
})}      

 
</div>
      
          </div>
          
  </div>
      
  );
}

export default App;
