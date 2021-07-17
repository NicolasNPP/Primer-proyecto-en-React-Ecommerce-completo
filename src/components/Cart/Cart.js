import React, { useState, useEffect, useContext } from 'react';
import './Cart.css';
import { useCartContext } from '../../contexts/CartContext';
import { ItemsContext } from '../../contexts/ItemsContext/ItemsContext';
import CartList from '../CartList/CartList';
import { Table } from 'reactstrap';



const Cart = () => {
    const { clearCart } = useCartContext();
    const { cart } = useCartContext();

    const borrarCarrito = clearCart;

    console.log(cart);







    return (

        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>

                {cart.map(function (num) {
                    return <CartList id={num.idprod} name={num.idprod} price={num.price} quant={num.quant} />
                })}



            </Table>
            <button onClick={borrarCarrito}>Eliminar todo</button>
            <div>Total:
                {



                }
            </div>

        </div>
    )


}


export default Cart