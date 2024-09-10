const Footer = () => {
  return (
    <footer className="bg-cyan-900 text-white py-6 text-center w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Kevin Soto Zabaleta. Todos los derechos reservados.
          </div>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-white hover:text-gray-300 mx-2">Términos</a>
            <a href="#" className="text-white hover:text-gray-300 mx-2">Privacidad</a>
            <a href="#" className="text-white hover:text-gray-300 mx-2">Contacto</a>
          </div>
          <div className="flex mt-4 sm:mt-0">
            <a href="#" className="text-white hover:text-gray-300 mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300 mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300 mx-2">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
