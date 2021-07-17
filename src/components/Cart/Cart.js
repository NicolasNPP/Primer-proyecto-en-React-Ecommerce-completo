import React, { useState, useEffect, useContext } from 'react';
import './Cart.css';
import { useCartContext } from '../../contexts/CartContext';
import { ItemsContext } from '../../contexts/ItemsContext/ItemsContext';
import CartList from '../CartList/CartList';
import { Table } from 'reactstrap';



const Cart = () => {
    const { clearCart } = useCartContext();
    const { cart } = useCartContext();
    const [total, setTotal] = useState(0);


    const borrarCarrito = () => {
        clearCart();
        setTotal(0);

    }

    console.log(cart);

    let tf = (tot) => {
        let x
        if (tot === 0) {
            x = false;
        }
        else {
            x = true;
        }

        return x


    }



    useEffect(() => {
        cart.map(function (num) {
            return setTotal(total + num.price * num.quant)
        })



    }, []);



    return (



        <div>
            {tf(total) ? <div><Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Precio unitario</th>
                        <th>Precio total</th>
                    </tr>
                </thead>

                {cart.map(function (num) {
                    return <CartList id={num.idprod} name={num.name} price={num.price} quant={num.quant} />
                })}




            </Table> <button onClick={borrarCarrito}>Eliminar todo</button> Total: {total} </div> : <div> El carrito esta vacio </div>}

            <div>






            </div>

        </div>
    )


}


export default Cart