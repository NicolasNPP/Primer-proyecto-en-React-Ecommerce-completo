import React, { useState, useEffect, useContext } from 'react';
import cartimage from './cart.png'
import './cart.css';
import { Link } from "react-router-dom";
import { useCartContext } from '../../contexts/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { cantitem } = useCartContext();

  let validador = (tot) => {
    let x
    if (cantitem === 0) {
      x = false;
    }
    else {
      x = true;
    }

    return x
  }

  return (
    <div>
      {validador(cantitem) ? <Link className="color" to="/cart"><img className="cart" src={cartimage} /> {cantitem} </Link> : <Link to="/cart"><img className="cart" src={cartimage} /></Link>}
    </div>
  )

}




export default CartWidget
