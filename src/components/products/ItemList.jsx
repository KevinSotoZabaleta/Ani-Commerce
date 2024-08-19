import Item from "./Item"

const ItemList = ({ products }) => {

  return (
    <div className="ml-4 mx-auto p-6 flex flex-wrap justify-center">
      {products.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ItemList