import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Saludo from '../Saludo/Saludo';
import axios from 'axios'
const ItemListContainer = () => {
  const [items, setItems] = useState([]);


  useEffect(() => {
    axios("https://breakingbadapi.com/api/characters?limit=180&offset=10").then((res) =>
      setItems(res.data)
    );


  });



  return (

    <div>


      <div>


        <Saludo greeting={"Compra un curso de actuacion con con tu personaje favorito."} />






        <div>



          <div className="container">
            <div className="row">

              {items.map(function (num) {
                return <div className="col-md-3" key={num.char_id}><ItemList name={num.name} price={`$${num.char_id}`} category={num.category} description={num.description} id={num.char_id} img={num.img} /></div>

              })}

            </div>
          </div>

        </div>

      </div>

    </div>

  );
}


export default ItemListContainer