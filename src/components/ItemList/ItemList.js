import React, { Suspense, lazy } from 'react';
import Loading from '../Loading/Loading';
const Item = lazy(() => import('../Item/Item'));






const ItemList = ({ data }) => {

    return (
        <div>

            <div className="container">
                <div className="row">
                    {data.map(function (num) {
                        return <div className="col-md-3" key={num.id}><Suspense fallback={<div><Loading /></div>}><Item name={num.name} price={num.price} description={num.description} id={num.id} img={num.photo} /></Suspense></div>

                    })}
                </div>
            </div>
        </div>
    )
}




export default ItemList;
