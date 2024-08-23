import { useContext } from "react"
import { CartContext } from "../context/Cart/CarProvider"

const CartDetail = ({ cart }) => {

  const { getTotal, getTotalProducts, removeItems, clearCart, buy } = useContext(CartContext)

  return (
    <div>
      <h1 className="text-2xl border-l-red-400" > Carro compras</h1>

      {cart.map((item) =>
        <div key={item.product.id}>
          <p>{item.product.nombre}</p>
          <p>Cantidad: {item.quantity}</p>
          <p> Precio: {item.product.precio}</p>

          <button className="text-2xl text-red-800" onClick={() => removeItems(item.product.id)}> Eliminar</button>
        </div>
      )}
      <h2>Total productos: {getTotalProducts()}</h2>
      <h2>Total a Pagar: ${getTotal()}</h2>
      <button className="text-2xl text-red-800" onClick={clearCart}>Vaciar Carro</button>
      <button className="text-2xl text-red-800" onClick={buy}>Comprar</button>
    </div>
  )
}

export default CartDetail