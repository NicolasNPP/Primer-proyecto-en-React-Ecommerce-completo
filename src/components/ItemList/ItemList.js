import React, { Suspense, lazy } from 'react';
import Item from '../Item/Item';
import ItemSemantic from '../ItemSemantic/ItemSemantic';







const ItemList = ({ data }) => {

    return (
        <div>

            <div className="container">
                <div className="row">
                    {data.map(function (num) {
                        return <div className="col-md-3" key={num.id}><ItemSemantic name={num.name} price={num.price} description={num.description} id={num.id} img={num.photo} /></div>

                    })}
                </div>
            </div>
        </div>
    )
}




export default ItemList;
