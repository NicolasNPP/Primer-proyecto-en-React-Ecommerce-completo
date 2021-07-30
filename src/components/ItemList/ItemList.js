import React, { Suspense, lazy } from 'react';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';
const ItemSemantic = lazy(() => import('../ItemSemantic/ItemSemantic'))

const ItemList = ({ data }) => {

    return (
        <div>

            <div className="container">
                <div className="row">
                    {data.map(function (num) {
                        return <div className="col-md-3" key={num.id}><Suspense fallback={<Loading></Loading>}><ItemSemantic name={num.name} price={num.price} description={num.description} id={num.id} img={num.photo} /></Suspense></div>

                    })}
                </div>
            </div>
        </div>
    )
}




export default ItemList;
