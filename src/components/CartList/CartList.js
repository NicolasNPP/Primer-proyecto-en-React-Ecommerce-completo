import React, { useState, useContext } from 'react';



const CartList = ({ name, price, quant }) => {


    return (



        <tbody>
            <tr>
                <th>X</th>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quant}</td>
            </tr>

        </tbody>

    );
}

export default CartList;