import React, {useState} from 'react';
import './ItemCount.css';

const ItemCount = () => {
    const [number, setNumber] = useState(1);
    const handdleIncrement = () => {
        setNumber(number + 1);
      }
      const handdleDecrement = () => {
        if (number <= 0) {
          setNumber(0);
       }
       else
        setNumber(number - 1);
    
      }

    return(
        <div>
            <div className="estado">
                {number}                            
            </div>
            <div className="contieneboton">
                <button className="buttonstate" onClick={handdleIncrement}>+</button>
                <button className="buttonstate" onClick={handdleDecrement}>-</button>
            </div>
            
            
            
        </div>
    )
}

export default ItemCount