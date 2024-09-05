import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/Cart/CarProvider";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";

const Search = ({ searchTerm }) => {

  const { cart } = useContext(CartContext)

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore()

    const fetchProducts = async () => {
      if (searchTerm !== "") {
        const q = query(collection(db, "Producto"), where("nombre", "==", searchTerm))
        const querySnapshot = await getDocs(q)
        const productsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setProducts(productsList)
      } else {
        setProducts([])
      }
    }

    fetchProducts()
  }, [searchTerm])

  console.log();
  

  return (
    <div>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.product.id}>{product.product.nombre}</li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron productos</p>
      )}
    </div>
  );
};

export default Search;
