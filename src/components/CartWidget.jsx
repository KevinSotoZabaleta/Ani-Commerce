import { useContext } from "react"
import { CartContext } from "./context/Cart/CarProvider"
import { Link } from "react-router-dom"

const Cart = () => {

  const { getTotalProducts } = useContext(CartContext)

  return (

    <Link to="/cart">
      <p><ion-icon name="cart-outline"></ion-icon> {getTotalProducts() === 0 ? null : getTotalProducts()}</p>
    </Link >
  )
}

export default Cart