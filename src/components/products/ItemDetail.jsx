import { CartContext } from '../context/Cart/CarProvider'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ItemDetail = ({ product }) => {
  const { addItems } = useContext(CartContext)
  const [showItemCount, setShowItemCount] = useState(true)
  const navigate = useNavigate()

  const onAdd = (quantity) => {
    addItems(product, quantity)
    setShowItemCount(false)
  }

  const backButton = () => {
    navigate(-1)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-800 to-black p-4 relative">
      <div className='bg-white rounded-xl shadow-md overflow-hidden m-4 relative z-10'>
        <div className="p-6">
          <h2 className="font-extrabold text-2xl text-blue-900">{product.nombre}</h2>
          <img className="w-full h-60 object-cover rounded-md mb-4" src={product.image} alt="Producto" />
          <p className="text-xl text-gray-700 mb-2">Precio: <span className="font-bold text-blue-900">${product.precio}</span></p>
          <p className="text-lg text-gray-500 mb-2">Stock: {product.stock}</p>
          <p className="text-lg text-gray-500 mb-4">Tipo: {product.tipo}</p>
          <hr className='my-4' />

          {/** Sección agregar al carro */}
          {product.stock > 0 ? (
            showItemCount ? (
              <div className="text-center">
                <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
              </div>
            ) : (
              <Link to="/cart" className="block text-center bg-green-500 text-white py-3 px-5 rounded-full shadow-md hover:bg-green-600 hover:shadow-lg transition duration-200 transform hover:scale-105">
                Terminar Compra
              </Link>
            )
          ) : (
            <p className="text-red-500 text-center">Producto sin stock disponible</p>
          )}
        </div>
      </div>

      {/**Boton volver */}
      <button
        className="absolute top-1/2 left-96 bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-200 transform hover:scale-105 z-20"
        onClick={backButton}>
        <ion-icon name="arrow-back-outline"></ion-icon>
      </button>
    </div>
  )
}

export default ItemDetail
