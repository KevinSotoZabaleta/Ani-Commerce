// import Cart from '../Cart/Cart';
import { CartContext } from '../context/Cart/CarProvider';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {

  const { addItems } = useContext(CartContext)

  const onAdd = (quantity) => {
    addItems(product, quantity)
    console.log(quantity);

  }

  return (
    <div className="flex items-center justify-center h-1/2">
      <div className='max-w-sm rounded-xl overflow-hidden shadow-lg bg-blue-900 m-4'>
        <h2 className="font-bold text-gray-100 text-xl ml-4">{product.nombre}</h2>
        <img className="w-full h-48 object-cover p-4" src="https://via.placeholder.com/400x300" alt="Producto" />
        <h2 className="font-bold text-gray-200 text-xl ml-4">Precio: {product.precio}</h2>
        <h2 className="font-bold text-gray-200 text-xl ml-4">Stock: {product.stock}</h2>
        <h2 className="font-bold text-gray-200 text-xl ml-4">{product.tipo}</h2>
        <hr className='m-4' />

        <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />

        <Link to="/cart">Termminar CVOmpra</Link>
      </div>
    </div>
  )
}

export default ItemDetail