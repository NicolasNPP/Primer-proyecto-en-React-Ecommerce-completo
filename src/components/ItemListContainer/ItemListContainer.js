import React, { useContext, useEffect, Suspense, lazy } from 'react';
import Saludo from '../Saludo/Saludo';
import { ItemsContext } from '../../contexts/ItemsContext/ItemsContext';
import { db } from '../../firebase';
import Loading from '../Loading/Loading';
const ItemList = lazy(() => import('../ItemList/ItemList'));




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
              <Suspense fallback={<Loading />}> <ItemList data={items} /> </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemListContainer