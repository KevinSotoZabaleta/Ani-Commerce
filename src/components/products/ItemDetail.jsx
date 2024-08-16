import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {

  return (

    <div>
      <img className="w-full h-48 object-cover p-4" src="https://via.placeholder.com/400x300" alt="Producto" />
      <h2 className="font-bold text-gray-200 text-xl mb-2">{product.nombre}</h2>
      <h2 className="font-bold text-gray-200 text-xl mb-2">Precio: {product.precio}</h2>
      <h2 className="font-bold text-gray-200 text-xl mb-2">Stock: {product.stock}</h2>
      <h2 className="font-bold text-gray-200 text-xl mb-2">{product.tipo}</h2>

      <ItemCount initial={1} stock={product.stock}/>
    </div>
  )
}

export default ItemDetail