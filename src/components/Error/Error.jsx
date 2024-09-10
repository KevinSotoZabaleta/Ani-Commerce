import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">Error de búsqueda</h1>
      <p className="text-lg text-gray-700 mb-8">La página que buscas no existe.</p>
      <Link to="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300">
        Ir al Inicio
      </Link>
    </div>
  )
}

export default Error