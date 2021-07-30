import React, { useContext, useState, useEffect, Suspense, lazy } from 'react';
import { ItemsContext } from '../contexts/ItemsContext/ItemsContext';
import './ItemDetail.css';
import { db } from '../firebase';
import Loading from '../components/Loading/Loading';
const ItemSemantic = lazy(() => import('../components/ItemSemantic/ItemSemantic'))

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

            <div className="row">


                <div className="col-md-3">  <Suspense fallback={<Loading></Loading>}> <ItemSemantic price={item.price} name={item.name} img={item.photo} description={item.description} id={itemID} /></Suspense></div>


            </div>

        </div>

    );
};

export default ItemDetail;