import React from 'react';

const ProductDetails = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">{item.nombre}</h2>
        <p className="text-gray-700 mb-4">Stock: {item.stock}</p>
        <p className="text-gray-700 mb-4">Precio: ${item.precio}</p>
        <button className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 w-full mb-4">
          Agregar al Carrito
        </button>
        <button onClick={onClose} className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-400 w-full">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;