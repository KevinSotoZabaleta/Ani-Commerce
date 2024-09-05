import { useContext } from "react";
import { CartContext } from "../context/Cart/CarProvider";
import { Link } from "react-router-dom";

const CartDetail = ({ cart }) => {
  const { getTotal, getTotalProducts, removeItems, clearCart, buy } = useContext(CartContext);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 border-b border-red-400 pb-2">Carro de Compras</h1>

        {cart.map((item) => (
          <div key={item.product.id} className="mb-4">
            <p className="text-lg font-semibold">{item.product.nombre}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.product.precio}</p>
            <button
              className="mt-2 text-red-500 hover:text-red-700"
              onClick={() => removeItems(item.product.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
        <hr />
        <h2 className="text-xl font-semibold mt-4">Total productos: {getTotalProducts()}</h2>
        <h2 className="text-xl font-semibold">Total a Pagar: ${getTotal()}</h2>
        <button onClick={clearCart} className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
          Vaciar Carro
        </button>
        <Link to={"/checkout"}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded inline-block">
          Comprar
        </Link>
      </div>
    </div>
  );
};

export default CartDetail;
