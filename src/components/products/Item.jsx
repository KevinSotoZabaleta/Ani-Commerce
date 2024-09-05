import { Link } from 'react-router-dom';
import foto1 from "/foto1.jpg";

const Item = ({ item }) => {
  return (
    <div>
      <div className="transform transition duration-300 hover:scale-105">
        <Link to={`/item/${item.id}`}>
          <div key={item.id} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-blue-800 to-slate-700-700 z-50 m-4 mt-14 hover:bg-blue-700 hover:shadow-xl transition duration-300">
            <img className="w-full h-48 object-cover p-4 rounded-t-xl" src={foto1} alt={item.nombre} />
            <div className="px-4 py-6">
              <div className="font-bold text-white text-xl truncate">
                {item.nombre}
              </div>
              <p className="text-gray-400 text-sm mt-2">
                {item.descripcion || "Descripción del producto..."}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Item;
