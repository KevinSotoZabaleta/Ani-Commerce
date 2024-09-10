import Item from "./Item"

const ItemList = ({ products }) => {

  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-black min-h-screen flex flex-wrap justify-center mt-16">
      {products.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ItemList