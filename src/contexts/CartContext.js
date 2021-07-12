import { createContext, useContext, useState } from 'react';

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([])

  const isInCart = idprod => cart.some(item => item.idprod === idprod)


  const addToCart = (item, quant) => {

    if (isInCart(item.idprod)) {
      //alert('esta en el carrito')
      const newCart = cart.map(cartElement => {
        if (cartElement.idprod === item.idprod) {
          return { ...cartElement, quant: cartElement.quant + quant }
        } else return cartElement;

      })
      setCart(newCart);
    }
    else {
      setCart(prev => [...prev, { ...item, quant }]);
    }


  };
  console.log(cart);

  return <CartContext.Provider value={{ cart, setCart, clearCart, addToCart }}>
    {children}
  </CartContext.Provider>

}
