import React, { Suspense, lazy } from 'react';
import Loading from '../Loading/Loading';
const Item = lazy(() => import('../Item/Item'));






const ItemList = ({ data }) => {

    return (
        <div>

            <div className="container">
                <div className="row">
                    {data.map(function (num) {
                        return <div className="col-md-3" key={num.char_id}><Suspense fallback={<div><Loading /></div>}><Item name={num.name} price={num.category} description={num.description} id={num.char_id - 1} img={num.img} /></Suspense></div>

                    })}
                </div>
            </div>
        </div>
    )
}




export default ItemList;
