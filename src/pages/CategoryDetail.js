import axios from 'axios';
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Item from '../components/Item/Item';

const CategoryDetail = ({ match }) => {
  const itemID = match.params.id;
  const [a, setA] = useState([]);

  useEffect(() => {
    axios(`https://breakingbadapi.com/api/characters?category=${itemID}`).then((res) =>
      setA(res.data)
    );
    console.log(a);
  });

  return (
    <div className="container">
      <div className="row">

        {a.map(function (num) {
          return <div className="col-md-3" key={num.char_id}><Item name={num.name} price={num.category} description={num.description} id={num.char_id} img={num.img} /></div>

        })}
      </div>
    </div>
  );
};

export default CategoryDetail;