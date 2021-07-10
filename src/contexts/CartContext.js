import { createContext, useContext, useState } from 'react';

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

  const clearCart = () => setCart([])
  

  const addToCart = (item, quant) => {
      setCart(prev=>[...prev,{...item, quant}]);
  }
  console.log(cart);

return <CartContext.Provider value={{ cart, setCart, clearCart, addToCart }}>
{children}
</CartContext.Provider>
 
}
