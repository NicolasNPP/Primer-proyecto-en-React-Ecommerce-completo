import React from 'react';
import cartimage from './cart.png'
import './cart.css';
import { Link } from "react-router-dom";

const CartWidget = () => (
  <Link to="/cart"><img className="cart" src={cartimage} /></Link>

)

export default CartWidget
