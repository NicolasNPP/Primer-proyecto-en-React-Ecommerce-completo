import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import Saludo from '../Saludo/Saludo';
import ItemList from '../ItemList/ItemList';
import { ItemsContext } from '../../contexts/ItemsContext/ItemsContext';

const ItemListContainer = () => {


  const [items, setItems] = useContext(ItemsContext);



  useEffect(() => {

    axios(`https://breakingbadapi.com/api/characters`).then((res) =>
      setItems(res.data)
    );

  }, []);

  console.log(items);
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