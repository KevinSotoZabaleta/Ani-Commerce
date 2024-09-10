import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/Cart/CarProvider"
import CartDetail from "./CartDetail"

const Cart = () => {
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {cart.length === 0 ? (
        <div className="text-center p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Carro Vacío</h2>
          <p className="text-gray-600 mt-4">
            Parece que no has agregado productos aún.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Volver al Inicio
          </button>
        </div>
      ) : (
        <div className="w-full max-w-4xl bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Tu Carrito de Compras
          </h2>
          <CartDetail cart={cart} />
        </div>
      )}
    </div>
  )
}

export default Cart
