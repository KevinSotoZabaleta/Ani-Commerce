import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../products/ItemList"
import Spinner from "../Spinner/Spinner"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {

    setLoading(true)

    const db = getFirestore()
    const myProducts = categoryId ? query(collection(db, "Producto"), where("tipo", "==", categoryId))
      : collection(db, "Producto")

    getDocs(myProducts).then((res) => {
      const newProduct = res.docs.map((doc) => {
        const data = doc.data()
        return { id: doc.id, ...data }
      })
      setProducts(newProduct)
    })
      .catch((error) => console.log("error search product", error))
      .finally(() => setLoading(false))

  }, [categoryId])

  return (
    <div>
      <h1>{greeting}</h1>

      {loading ? <Spinner /> : <ItemList products={products} />}

    </div>
  )
}

export default ItemListContainer