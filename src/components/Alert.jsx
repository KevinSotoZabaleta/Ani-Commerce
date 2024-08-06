import { useEffect, useState } from 'react';

const AlertWithInput = () => {
  const [inputValue, setInputValue] = useState('')
  
  useEffect(() => {
    const value = prompt('Ingrese su nombre:')
    const valueTwo = (value !== null && value !== undefined) ? value : 'Sin nombre'
    setInputValue(valueTwo)
    alert(`Has ingresado: ${value}`)
  }, [])

  return (
    <div className="flex justify-center items-start h-screen">
      <p className="text-2xl">Valor ingresado: {inputValue}</p>
    </div>
  )
}

export default AlertWithInput
