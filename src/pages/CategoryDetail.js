import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Item from '../components/Item/Item';
import { Link } from 'react-router-dom';



const CategoryDetail = ({ match }) => {
let itemID = match.params.id;
console.log(itemID);
const [a, setA] = useState([]);

useEffect(() => {
    axios(`https://breakingbadapi.com/api/characters?category=${itemID}`).then((res) => 
setA(res.data)
    );
    //console.log(a[0]);
  });


    return (
        <div className="container">
      <div className="row">
        
{a.map(function(num){
     return <div className="col-md-3" key={num.char_id}><Link to={`/detail/${num.char_id}`}><Item name={num.name} price={num.category} description={num.description} img={num.img}/></Link></div>
    
  })}

  
  

    
    
        </div>
        </div>
    );
};

export default CategoryDetail;