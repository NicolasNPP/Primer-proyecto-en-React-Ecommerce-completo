import React, { useState, useEffect, useContext } from 'react';
import cartimage from './cart.png'
import './cart.css';
import { Link } from "react-router-dom";
import { useCartContext } from '../../contexts/CartContext';

const CartWidget = () => {
  const { cart } = useCartContext();
  const [cantitem, setCantItem] = useState(0);

  useEffect(() => {
    cart.map(function (num) {
      return setCantItem(num.quant)
    })



  });


  return (
    <Link to="/cart"><img className="cart" src={cartimage} /> {cantitem} </Link>
  )

}




export default CartWidget
