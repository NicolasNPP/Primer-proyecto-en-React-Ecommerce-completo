import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { ItemsContext } from '../contexts/ItemsContext/ItemsContext';
import { Link } from 'react-router-dom';
import Item from '../components/Item/Item';
import './ItemDetail.css';
import { db } from '../firebase';

const ItemDetail = ({ match }) => {
    let itemID = match.params.id;
    const [items, setItems] = useContext(ItemsContext);
    const [item, setItem] = useState([]);


    const getProduct = () => {
        db.collection('products').doc(itemID).get()
            .then(snapshot => setItem(snapshot.data()))

    }

    useEffect(() => {
        getProduct();
    }
    )

    return (
        <div className="container">



            <Item price={item.price} name={item.name} img={item.photo} description={item.description} id={itemID} />



        </div>

    );
};

export default ItemDetail;