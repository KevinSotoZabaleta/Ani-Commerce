import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  //agregar al carro
  const addItems = (product, quantity) => {

    if (isinCart(product.id)) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      )
    } else {
      setCart([...cart, { product, quantity }])
    }
  }

  //ver si esta en el carro
  const isinCart = (id) => {
    return cart.some((item) => item.product.id === id)
  }

  //limpia carro
  const clearCart = () => {
    setCart([])
  }

  //Total carrito
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.product.precio * item.quantity, 0)
  }

  //Total carrito productos
  const getTotalProducts = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  //eliminar items de carro
  const removeItems = (id) => {
    setCart(cart.filter((item) => item.product.id !== id))
  }

  //Buy
  const buy = () => {
    console.log("Compra realizada")
  }

  return (
    <CartContext.Provider value={{ cart, addItems, isinCart, clearCart, getTotal, getTotalProducts, removeItems, buy}}>
      {children}
    </CartContext.Provider>

  )
}

export default CartProvider