import { createContext, useContext, useState } from 'react';

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([])

  const cantitem = cart.reduce((acc, { quant }) => acc + quant, 0);

  const cantitemdos = cart.reduce((acc, { quant, price }) => acc + (quant * price), 0);


  const isInCart = idprod => cart.some(item => item.idprod === idprod)

  const addToCart = (item, quant, price, name) => {

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
      setCart(prev => [...prev, { ...item, quant, price, name }]);
    }


  };
  console.log(cart);

  return <CartContext.Provider value={{ cart, setCart, clearCart, addToCart, isInCart, cantitem, cantitemdos }}>
    {children}
  </CartContext.Provider>

}
