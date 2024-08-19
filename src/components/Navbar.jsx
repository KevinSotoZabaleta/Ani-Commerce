import { Link, NavLink } from "react-router-dom";
import Cart from "./CartWidget";
import logoNav from "/LogoOrigin.png";

const Nav = () => {
  return (
    <nav className="px-4 py-3 flex justify-between items-center bg-blue-950">
      {/* Logo a la izquierda */}
      <div className="flex items-center">
        <Link to="/"><img src={logoNav} alt="Logo" className="h-12 mr-2" /></Link>
        <span className="text-white text-md font-semibold">Ani-Commerce</span>
      </div>

      {/* Elementoss en el centro */}
      <div className="flex-grow flex justify-center">
        <ul className="flex justify-center space-x-16 bg-white/35 backdrop-blur-md p-3 rounded-md">
          <li className="text-white cursor-pointer transition delay-10 hover:-translate-y-1 duration-300 shadow-md">
            <ion-icon name="home-outline"></ion-icon>
            <Link to="/"> Inicio</Link>
          </li>

          {/* Menú desplegable */}
          <li className="relative group text-white cursor-pointer transition delay-10 hover:-translate-y-1 duration-300 shadow-md">
            <ion-icon name="file-tray-full-outline"></ion-icon>
            <span> Productos</span>

            {/* Submenú */}
            <ul className="absolute left-0 mt-2 w-40 bg-white text-blue-950 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition-all duration-300 ease-in-out">
              <li className="px-4 py-2 hover:bg-blue-500 hover:text-white">
                <ion-icon name="home-outline"></ion-icon><NavLink to="/todos"> Todos</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-blue-500 hover:text-white">
                <ion-icon name="shirt-outline"></ion-icon><NavLink to="/category/Ropa"> Ropa</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-blue-500 hover:text-white">
                <ion-icon name="game-controller-outline"></ion-icon><NavLink to="/category/Electronica"> Electrónica</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-blue-500 hover:text-white">
                <ion-icon name="footsteps-outline"></ion-icon><NavLink to="/category/Calzado"> Calzado</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Nmero en un cuadrado a la derecha */}
      <div className="flex items-center">
        <div className="flex justify-center space-x-6 bg-white/70 backdrop-blur-sm p-3 rounded-lg">
          {/* CARTWIDGET */}
          <Cart />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
