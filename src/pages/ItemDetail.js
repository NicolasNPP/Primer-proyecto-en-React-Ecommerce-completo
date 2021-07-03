import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Item from '../components/ItemList/ItemList';
import './ItemDetail.css';



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
        <div className="container">
      <div className="row">
{a.map(function(num){
     return <div className="col-md-3" key={num.char_id}><Item img={num.img}/></div>
    
  })}

  {a.map(function(num){
let hh = "";
function n() {
    
    if (num.category == "Breaking Bad, Better Call Saul" ) {
        hh = "breaking+bad+bettercallsaul";
     }
     else if (num.category == "Breaking Bad" ) {
        hh = "breaking+bad";
    }
    else 
    hh = "better+call+saul";
}

n()


    
//let x = num.category.replace(/ /g, "+");



     return <div className="col-md-9" key={num.char_id}>
         <h1>{num.name}</h1>         

         <Link to={`/category/${hh}`}><h3>{num.category}</h3></Link>
         <h4>Precio: ${num.char_id} </h4>
         <p> {num.name}, actuo en: {num.category}, en donde era llamado como {num.nickname}. Puedes comprar a {num.nickname} por solamente ${num.char_id}  </p>
     </div>
    
  })}

    
    
        </div>
        </div>
    );
};

export default ItemDetail;