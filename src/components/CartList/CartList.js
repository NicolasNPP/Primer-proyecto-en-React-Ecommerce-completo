import React, { useState, useContext } from 'react';
import { useCartContext } from '../../contexts/CartContext';



const CartList = ({ name, price, quant, id }) => {
    const { cart } = useCartContext();

    function borrarElemento() {
        const yy = cart.find(obj => obj.idprod === id);
        const yyy = cart.indexOf(yy);
        console.log(yyy);
        console.log(cart);
        cart.splice(yyy, 1);
        console.log(cart);
    }


    return (



        <tbody id={id}>
            <tr>
                <th><button onClick={borrarElemento}>X</button></th>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quant}</td>
                <td>{price * quant}</td>
            </tr>

        </tbody>

    );
}

export default CartList;