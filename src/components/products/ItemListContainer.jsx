import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../products/ItemList"
import Spinner from "../Spinner/Spinner"

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('/productos.json')
        const data = await response.json()
        const filterProducts = categoryId ? data.filter((p) => p.tipo === categoryId) : data
        setProducts(filterProducts)

      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    }

    fetchData()

  }, [categoryId])
  // console.log(categoryId);


  return (
    <div>

      <h1>{greeting}</h1>

      {loading ? <Spinner /> : <ItemList products={products} />}



    </div>
  )
}

export default ItemListContainer