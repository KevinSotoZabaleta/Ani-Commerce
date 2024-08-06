const Item = ({item}) => {

    return(
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-blue-900 m-4">
        <img className="w-full h-48 object-cover p-4" src="https://via.placeholder.com/400x300" alt="Producto" />
        <div className="px-4 py-8">
          <div className="font-bold text-gray-200 text-xl mb-2">{item.nombre}</div>
          <p className="text-gray-200 text-base">
            Aquí va una breve descripción del contenido de la tarjeta. el contenido o propósito de esta tarjeta.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">Precio: {item.precio}</span>
          <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">Stock: {item.stock}</span>
          <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">Tipo: {item.tipo}</span>
        </div>
      </div>
    )
  }
  
  export default Item