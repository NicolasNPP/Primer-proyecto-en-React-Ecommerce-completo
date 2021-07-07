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
    });

    return (
        <div className="container">
            <div className="row">
                {a.map(function (num) {
                    return <div className="col-md-3" key={num.char_id}><Item img={num.img} id={num.char_id} /></div>

                })}

                {a.map(function (num) {
                    let hh = "";
                    function n() {

                        if (num.category == "Breaking Bad, Better Call Saul") {
                            hh = "breaking+bad+bettercallsaul";
                        }
                        else if (num.category == "Breaking Bad") {
                            hh = "breaking+bad";
                        }
                        else
                            hh = "better+call+saul";
                    }

                    n()
                    return <div className="col-md-9" key={num.char_id}>
                        <h1>{num.name}</h1>

                        <h3>Categoria: <Link to={`/category/${hh}`}>{num.category}</Link></h3>
                        <h4>Precio: ${num.char_id} </h4>
                        <p><b>Descripcion:</b> {num.name}, actuo en: {num.category}, en donde era llamado como {num.nickname}. Puedes comprar un curso de actuacion con {num.nickname} por solamente ${num.char_id}  </p>
                    </div>

                })}
            </div>
        </div>
    );
};

export default ItemDetail;