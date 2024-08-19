import { Link } from 'react-router-dom';

const Item = ({ item }) => {

  return (
    <Link to={`/item/${item.id}`}>
      <div key={item.id} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-blue-900 m-4">
        <img className="w-full h-48 object-cover p-4" src="https://via.placeholder.com/400x300" alt="Producto" />
        <div className="px-4 py-8">
          <div className="font-bold text-gray-200 text-xl">
            {item.nombre}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;