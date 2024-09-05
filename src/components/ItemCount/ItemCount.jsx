import { useState } from "react"

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial)

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1)
    }
  }

  const increment = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  return (
    <div className="max-w-sm p-4 bg-slate-500 rounded-xl shadow-lg m-2 flex flex-col items-center">
      <div className="flex items-center space-x-4">
        <button onClick={decrement} disabled={count <=1 || stock === 0} className="bg-sky-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition duration-200 ease-in-out">
          -
        </button>
        <p className="text-white text-xl font-semibold">{count}</p>
        <button onClick={increment} disabled={count >= stock || stock === 0} className="bg-sky-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition duration-200 ease-in-out">
          +
        </button>
      </div>
      <button onClick={() => onAdd(count)} disabled={stock === 0} className="mt-2 bg-sky-700 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition duration-200 ease-in-out">
        Agregar al Carro
      </button>
    </div>
  )
}

export default ItemCount
