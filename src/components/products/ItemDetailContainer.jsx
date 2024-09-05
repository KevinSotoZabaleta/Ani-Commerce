import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Spinner from "../Spinner/Spinner"
import { getFirestore, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState("")
  const { id } = useParams()

  useEffect(() => {

    const db = getFirestore()
    const newDoc = doc(db, "Producto", id)

    getDoc(newDoc).then((res) => {
      const data = res.data()
      const newProduct = { id: res.id, ...data }
      setProduct(newProduct)
    })
  }, [])

  return (
    <div>
      {product == undefined ? <Spinner /> : <ItemDetail product={product} />}
    </div>
  )
}

export default ItemDetailContainer
