const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center space-x-2">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        <span className="text-blue-500 font-semibold">Cargando...</span>
      </div>
    </div>
  );
}

export default Spinner;