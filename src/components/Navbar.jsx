import Cart from "./CartWidget"
import logoNav from "/LogoOrigin.png"

const Nav = () => {
  return(
    <nav className="px-4 py-3 flex justify-between items-center bg-blue-950">
      {/* Logo a la izquierda */}
      <div className="flex items-center">
        <img src={logoNav} alt="Logo" className="h-12 mr-2" />
        <span className="text-white text-md font-semibold">Ani-Commerce</span>
      </div>
      
      {/* Lista de elementos en el centro */}
      <div className="flex-grow flex justify-center">
        <ul className="flex justify-center space-x-16 bg-white/35 backdrop-blur-md p-3 rounded-md">
          <li className="text-white cursor-pointer transition delay-10 hover:-translate-y-1 duration-300 shadow-md"><ion-icon name="home-outline"></ion-icon> Inicio</li>
          <li className="text-white cursor-pointer transition delay-10 hover:-translate-y-1 duration-300 shadow-md"><ion-icon name="file-tray-full-outline"></ion-icon> Productos</li>
          <li className="text-white cursor-pointer transition delay-10 hover:-translate-y-1 duration-300 shadow-md"><ion-icon name="person-outline"></ion-icon> Sobre Mi</li>
          <li className="text-white cursor-pointer transition delay-10 hover:-translate-y-1 duration-300 shadow-md"><ion-icon name="mail-outline"></ion-icon> Contacto</li>
        </ul>
      </div>
      
      {/* Número en un cuadrado a la derecha */}
      <div className="flex items-center">
        <div className="flex justify-center space-x-6 bg-white/70 backdrop-blur-sm p-3 rounded-lg">
          {/* CARTWIDGET */}
          <Cart/>
        </div>
      </div>
    </nav>   
  )
}

export default Nav