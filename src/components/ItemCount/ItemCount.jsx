import { useState } from "react"

const ItemCount = ({stock}) => {

  const [count, setCount] = useState(1)

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const increment = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const addToCart = () => {
    alert(`Se agregaron ${count} items al carrito`)
  }

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-cyan-600 m-4">
      <button onClick={decrement} className="bg-cyan-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Decremento</button>
      <p className="text-white">{count}</p>
      <button onClick={increment} className="bg-cyan-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Incremento</button>
      <button onClick={addToCart} className="bg-cyan-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Agregar Carro</button>
    </div>
  )
}

export default ItemCount