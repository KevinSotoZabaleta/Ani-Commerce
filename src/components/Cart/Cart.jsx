import { useContext } from "react"
import { CartContext } from "../context/Cart/CarProvider"
import CartDetail from "./CartDetail"

const Cart = () => {

  const { cart } = useContext(CartContext)

  return (
    <div>
      {cart.length === 0 ? (
        <h1>No hay productos</h1>
      ) : (
        <>
          <CartDetail cart={cart} />
        </>
      )}
    </div>
  )
}

export default Cart