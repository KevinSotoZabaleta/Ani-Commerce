import { Link } from 'react-router-dom'
import foto1 from "/foto1.jpg"

const Item = ({ item }) => {


  const calcularEstrellas = (fuerza) => {
    if (!fuerza) return 0
    const estrellas = Math.round(fuerza / 2)
    return estrellas
  }

  const renderizarEstrellas = (numeroDeEstrellas) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        fill={index < numeroDeEstrellas ? 'currentColor' : 'none'}
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className={`w-5 h-5 ${index < numeroDeEstrellas ? 'text-yellow-500' : 'text-gray-300'}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 17.27l5.18 2.73-1.64-6.81L21 9.24l-6.86-.61L12 2.5l-2.14 6.13L3 9.24l4.46 3.95-1.64 6.81L12 17.27z"
        />
      </svg>
    ))
  }

  const numeroDeEstrellas = calcularEstrellas(item.fuerza)


  return (
    <div>
      <div className="transform transition duration-300 hover:scale-105">
        <Link to={`/item/${item.id}`}>
          <div key={item.id} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-blue-800 to-slate-700-700 z-50 m-4 mt-14 hover:bg-blue-700 hover:shadow-xl transition duration-300">
            <img className="w-full h-48 object-cover p-4 rounded-t-xl" src={foto1} alt={item.nombre} />
            <div className="px-4 py-6">
              <div className="font-bold text-white text-xl truncate">
                {item.nombre}
              </div>
              <p className="text-gray-400 text-sm mt-2">
                {item.descripcion || "Descripción del producto..."}
              </p>
              <div className="flex items-center">
                <span className="mr-2">Fuerza:</span>
                <div className="flex">{renderizarEstrellas(numeroDeEstrellas)}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Item
