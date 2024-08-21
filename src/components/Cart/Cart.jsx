import { useContext } from "react"
import { CartContext } from "../context/Cart/CarProvider"

const Cart = () => {

  const { cart } = useContext(CartContext)

  // console.log(cart);


  return (
    <div>
      {cart.map((item) => (
        <div key={item.product.id}>
          <p>{item.product.nombre}</p>
          <p>{item.product.stock}</p>
          <p>{item.quantity}</p>
        </div>
      ))}
    </div>
  )
}

export default Cart