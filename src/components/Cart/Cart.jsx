import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/Cart/CarProvider"
import CartDetail from "./CartDetail"

const Cart = () => {

  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <div>
      {cart.length === 0 ? (
        navigate("/")
      ) : (
        <>
          <CartDetail cart={cart} />
        </>
      )}
    </div>
  )
}

export default Cart