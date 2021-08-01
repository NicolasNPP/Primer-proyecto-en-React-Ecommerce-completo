import React, { useState, useEffect, Suspense, lazy } from 'react';
import './ItemDetail.css';
import { db } from '../firebase';
import Loading from '../components/Loading/Loading';
const ItemSemantic = lazy(() => import('../components/ItemSemantic/ItemSemantic'))

const ItemDetail = ({ match }) => {
    let itemID = match.params.id;
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

            <div className="row">


                <div className="col-md-3">  <Suspense fallback={<Loading></Loading>}> <ItemSemantic price={item.price} name={item.name} img={item.photo} description={item.description} id={itemID} stock={item.stock} /></Suspense></div>


            </div>

        </div>

    );
};

export default ItemDetail;