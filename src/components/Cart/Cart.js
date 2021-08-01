import React, { useState, useEffect } from 'react';
import './Cart.css';
import { useCartContext } from '../../contexts/CartContext';
import CartList from '../CartList/CartList';
import { Table } from 'reactstrap';
import { Link } from "react-router-dom";

const Cart = () => {
    const { clearCart } = useCartContext();
    const { cart, cantitemdos } = useCartContext();
    const [total, setTotal] = useState(0);
    const borrarCarrito = () => {
        clearCart();
        setTotal(0);

    }

    console.log(cart);

    let validate = (tot) => {
        let x
        if (tot === 0) {
            x = false;
        }
        else {
            x = true;
        }

        return x


    }

    let validateDos = (tot) => {
        let y
        if (tot === 0) {
            y = false;
        }
        else {
            y = true;
        }

        return y


    }

    useEffect(() => {
        cart.map(function (num) {
            return setTotal(total + num.price * num.quant)
        })



    }, []);

    return (
        <div>
            <center><h1>Carrito</h1></center>
            {validate(total) ? <div>

                {validateDos(cantitemdos) ? <div>     <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Precio total</th>
                        </tr>
                    </thead>

                    {cart.map(function (num) {
                        return <CartList id={num.idprod} name={num.name} price={num.price} quant={num.quant} />
                    })}
                </Table> </div> : <div> </div>}
                {validateDos(cantitemdos) ? <div>    <button className="buttons" onClick={borrarCarrito}>Limpiar carrito</button> <br></br><br></br> <b>Total:</b> {cantitemdos} <br></br><Link to={`/checkout`}><center><button className="buttonok">Continuar</button></center></Link> </div> : <div> El carrito esta vacio <Link to="/">Ver productos</Link> </div>}

            </div>
                :
                <div> El carrito esta vacio <Link to="/">Ver productos</Link> </div>}

            <div>

            </div>

        </div>
    )


}


export default Cart