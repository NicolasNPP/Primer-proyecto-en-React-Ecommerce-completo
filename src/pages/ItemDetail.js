import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Item from '../components/Item/Item';


const ItemDetail = ({ match }) => {
let itemID = match.params.id;
const [a, setA] = useState([]);

useEffect(() => {
    axios(`https://breakingbadapi.com/api/characters/${itemID}`).then((res) => 
setA(res.data)
    );
    //console.log(a[0]);
  });


    return (
        <div>
{a.map(function(num){
     return <div className="col-md-3" key={num.char_id}><Item name={num.name} price={num.category} description={num.description} img={num.img}/></div>
    
  })}   
        </div>
    );
};

export default ItemDetail;