import React, { useState, useContext } from 'react';
import './ItemCount.css';
import { useCartContext } from '../../contexts/CartContext'
import { ItemsContext } from '../../contexts/ItemsContext/ItemsContext';
import { Link } from "react-router-dom";



const ItemCount = ({ nombre, precio, identificacion, price, name, stock }) => {

    const [items, setItems] = useContext(ItemsContext);

    const { cart, addToCart, isInCart } = useCartContext();

    let idprod = identificacion;







    const [number, setNumber] = useState(1);

    const onAdd = () => {
        addToCart({ idprod }, number, price, name);




    }

    const handdleIncrement = () => {
        if (number < stock) {
            setNumber(number + 1);
        }
        else
            setNumber(stock);
    }

    const handdleDecrement = () => {
        if (number <= 1) {
            setNumber(1);
        }
        else
            setNumber(number - 1);

    }

    const hannddleAddCart = () => {
        if (number <= stock && number > 0) {
            alert(`Agregaste ${number} productos al carrito`)
        }
        else if (number >= stock) {
            alert(`Solo puedes agregar hasta ${stock} productos por falta de stock`)
        }
        else
            alert(`Debes agregar al menos un producto a tu carrito`)

    }

    return (
        <div>

            <div className="contienebotoncarrito">
                {isInCart(identificacion) ? <button className="buttongocart"><Link to="/cart" className="link">Ir al carrito</Link></button> : <div> <div className="estado">
                    Cantidad: {number}      -    Stock: {stock}
                </div>

                    <div className="contieneboton">
                        <button className="buttonstate" onClick={handdleDecrement}>-</button>
                        <button className="buttonstate" onClick={handdleIncrement}>+</button>
                    </div> <button className="buttoncart" onClick={onAdd}>Agregar al carrito</button> </div>}
            </div>

        </div>
    )
}

export default ItemCount