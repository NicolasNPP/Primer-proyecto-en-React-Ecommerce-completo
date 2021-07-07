import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from '../ItemList/ItemList';

const AllCat = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios("https://breakingbadapi.com/api/characters").then((res) =>
      setItems(res.data)
    );
  });

  return (
    <div>
      <div>
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

export default AllCat