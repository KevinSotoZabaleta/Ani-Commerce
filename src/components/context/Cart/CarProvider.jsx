import { createContext, useState } from "react";

export const CartContext = createContext()

 const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  //agregar al carro
  const addItems = (product, quantity) => {
    setCart([...cart, {product,quantity}])

  }

  //ver si esta en el carro
  const isinCart = () => { }

  //limpia carro
  const clearCart = () => { }

  //Total carrito
  const getTotal = () => { }

  //eliminar items de carro
  const removeItems = () => { }



  return (

    <CartContext.Provider value={{ cart, addItems, isinCart, clearCart, getTotal, removeItems }}>
      {children}
    </CartContext.Provider>

  )
}

export default CartProvider