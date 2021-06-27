import React, {useState} from 'react';
import './ItemCount.css';

const ItemCount = () => {
    const [number, setNumber] = useState(4);
    const [stock, setStock] = useState(5);

    const handdleIncrement = () => {
      if (number < stock) {
        setNumber(number + 1);
       }
       else
        setNumber(stock);
      }


      const handdleDecrement = () => {
        if (number <= 0) {
          setNumber(0);
       }
       else
        setNumber(number - 1);
    
      }

      const hannddleAddCart = () => {
        if (number <= stock && number > 0 ) {
            alert(`Agregaste ${number} productos al carrito`)
         }
         else if (number >= stock) {
         alert(`Solo puedes agregar hasta ${stock} productos por falta de stock`)
        }
        else 
        alert(`Debes agregar al menos un producto a tu carrito`)


      }

    return(
        <div>
            <div className="estado">
                Cantidad: {number}      -    Stock: {stock}                           
            </div>
            
            <div className="contieneboton">
                <button className="buttonstate" onClick={handdleDecrement}>-</button>
                <button className="buttonstate" onClick={handdleIncrement}>+</button>
                <button className="buttoncart" onClick={hannddleAddCart}>Agregar al carrito</button>
            </div>
            
            
            
        </div>
    )
}

export default ItemCount