import { useContext, useState } from 'react';
import { CartContext } from '../context/Cart/CarProvider';
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, getTotal, clearCart } = useContext(CartContext);

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [celular, setCelular] = useState("")
  const [email, setEmail] = useState("")
  const [emailConfirmacion, setEmailConfirmacion] = useState("")
  const [error, setError] = useState("")
  const [orderId, setOrdenId] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)  // Nuevo estado para controlar si el formulario ha sido enviado

  const handleForm = (e) => {
    e.preventDefault()

    if (!nombre || !apellido || !celular || !email || !emailConfirmacion) {
      setError("Completa los campos")
      return
    }

    if (email !== emailConfirmacion) {
      setError("Los correos electrónicos no coinciden")
      return
    }

    const db = getFirestore()

    const order = {
      items: cart.map((product) => ({
        id: product.product.id,
        nombre: product.product.nombre,
        quantity: product.quantity
      })),
      total: getTotal(),
      date: new Date(),
      nombre,
      apellido,
      celular,
      email,
    }

    Promise.all(
      order.items.map(async (productOrder) => {
        const productRef = doc(db, "Producto", productOrder.id)
        const productDoc = await getDoc(productRef)
        const stock = productDoc.data().stock

        await updateDoc(productRef, {
          stock: stock - productOrder.quantity,
        })
      })
    ).then(() => {
      addDoc(collection(db, "orders"), order)
        .then((docRef) => {
          setOrdenId(docRef.id)
          setIsSubmitted(true)  // Marcar el formulario como enviado
          clearCart()
        })
        .catch((error) => {
          console.log("Error agregando documento", error)
          setError("No se pudo generar la orden, inténtalo nuevamente.")
        })
    }).catch((error) => {
      console.log("Error actualizando stock", error)
      setError("No se puede actualizar el stock, inténtalo nuevamente.")
    })
  }

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Ingresa tus datos</h1>

        <div className="mb-6">
          {cart.map((product) => (
            <div key={product.product.id} className="flex items-center">
              <p className="font-semibold">{product.product.nombre}</p>
              <div className="flex-grow border-t border-dotted mx-2"></div>
              <p>${product.product.precio}</p>
            </div>
          ))}
          <hr />
        </div>
        <form onSubmit={handleForm}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Nombre</label>
            <input name="nombre"
              type="text"
              className="w-full mt-1 p-2 border rounded-md"
              onChange={(e) => setNombre(e.target.value)}
              disabled={isSubmitted}  // Deshabilitar si ya se envió el formulario
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Apellido</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded-md"
              onChange={(e) => setApellido(e.target.value)}
              disabled={isSubmitted}  // Deshabilitar si ya se envió el formulario
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Celular</label>
            <input
              type="number"
              className="w-full mt-1 p-2 border rounded-md"
              onChange={(e) => setCelular(e.target.value)}
              disabled={isSubmitted}  // Deshabilitar si ya se envió el formulario
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-2 border rounded-md"
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitted}  // Deshabilitar si ya se envió el formulario
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Confirmar Email</label>
            <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} disabled={isSubmitted} // Deshabilitar si ya se envió el formulario
              className="w-full mt-1 p-2 border rounded-md" />
          </div>

          <button type="submit" disabled={isSubmitted}
            className={`w-full py-2 rounded-md transition-colors ${isSubmitted ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'} text-white`}>
            Generar orden de compra
          </button>

          {error && <p className="mt-4 text-red-500">{error}</p>}

          {orderId && (
            <div className="mt-4">
              <p className="text-green-500">Gracias, tu número de orden es: {orderId}</p>
              <Link to="/" className="mt-4 inline-block w-full bg-blue-500 text-center text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
                Volver al inicio
              </Link>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Checkout
