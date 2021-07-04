import React, { useState, useEffect, Suspense, lazy } from 'react';
import Saludo from '../Saludo/Saludo';
import axios from 'axios'
const ItemList = lazy(() => import('../ItemList/ItemList'));

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
                return <div className="col-md-3" key={num.char_id}><Suspense fallback={<h3>Cargando</h3>}><ItemList name={num.name} price={`$${num.char_id}`} category={num.category} description={num.description} id={num.char_id} img={num.img} /></Suspense></div>

              })}

            </div>
          </div>

        </div>

      </div>

    </div>

  );
}


export default ItemListContainer