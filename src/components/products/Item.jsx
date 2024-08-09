import React, { useState } from 'react';
import ProductDetails from './DetailProduct'; // Asegúrate de importar el nuevo componente

const Item = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-blue-900 m-4">
      <img className="w-full h-48 object-cover p-4" src="https://via.placeholder.com/400x300" alt="Producto" />
      <div className="px-4 py-8">
        <div className="font-bold text-gray-200 text-xl mb-2">{item.nombre}</div>
        <p className="text-gray-200 text-base">
          Aquí va una breve descripción del contenido de la tarjeta o propósito de esta tarjeta.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button onClick={handleShowDetails} className="bg-gray-200 text-blue-900 py-2 px-4 rounded hover:bg-gray-300">
          Detalle del Producto
        </button>
      </div>

      {showDetails && <ProductDetails item={item} onClose={handleCloseDetails} />}
    </div>
  );
};

export default Item;
