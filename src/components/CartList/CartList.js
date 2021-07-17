import React, { useState, useContext } from 'react';
import { useCartContext } from '../../contexts/CartContext';



const CartList = ({ name, price, quant, id }) => {
    const { isInCart } = useCartContext();



    return (



        <tbody id={id}>
            <tr>
                <th><button>X</button></th>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quant}</td>
                <td>{price * quant}</td>
            </tr>

        </tbody>

    );
}

export default CartList;