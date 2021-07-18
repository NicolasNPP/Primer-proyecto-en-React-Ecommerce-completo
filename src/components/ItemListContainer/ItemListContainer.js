import React, { useContext, useEffect } from 'react';
import Saludo from '../Saludo/Saludo';
import ItemList from '../ItemList/ItemList';
import { ItemsContext } from '../../contexts/ItemsContext/ItemsContext';
import { db } from '../../firebase';




const ItemListContainer = () => {


  const [items, setItems] = useContext(ItemsContext);

  const getProducts = () => {

    const docs = [];
    db.collection('products').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {


        docs.push({ ...doc.data(), id: doc.id });

      })
      setItems(docs);


    }

    )

  }


  useEffect(() => {

    getProducts();

  }, []);


  return (

    <div>
      <div>
        <Saludo greeting={"Compra tu producto favorito"} />
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