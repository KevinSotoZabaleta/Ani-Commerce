import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Spinner from "../Spinner/Spinner"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState("")
  const {id} = useParams()

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('/productos.json')
        const data = await response.json()
        const newProduct = data.find(p => p.id == Number(id))
        setProduct(newProduct)


      } catch (error) {
        console.log(error);
      }
      
    }

    fetchData()

  }, [id])

  return (
        <div>

          {product == undefined ? <Spinner/>:<ItemDetail product={product}/>}

          <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer