import React, { useContext } from 'react';
import Saludo from '../Saludo/Saludo';
import ItemList from '../ItemList/ItemList';
import { ItemsContext } from '../../ItemsContext';

const ItemListContainer = () => {


  const [items, setItems] = useContext(ItemsContext);
  
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