import React, { Suspense, lazy } from 'react';
import Loading from '../Loading/Loading';
const ItemSemantic = lazy(() => import('../ItemSemantic/ItemSemantic'))


const ItemList = ({ data }) => {

    return (
        <div className="container">
            <div className="row">
                {data.map(function (num) {
                    return <div key={num.id} className="col-md-3">

                        <Suspense fallback={<Loading></Loading>}><ItemSemantic name={num.name} price={num.price} description={num.description} id={num.id} img={num.photo} stock={num.stock} /></Suspense>

                    </div>

                })

                }


            </div>
        </div >
    )
}




export default ItemList;
