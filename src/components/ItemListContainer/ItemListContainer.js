import React, { useState, useEffect } from 'react';
import Saludo from '../Saludo/Saludo';
import axios from 'axios'
import ItemList from '../ItemList/ItemList';
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
              <ItemList data={items} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemListContainer