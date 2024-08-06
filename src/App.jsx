import Nav from "./components/Navbar"
import TextInput from "./components/TextoInput"
// import AlertWithInput from "./components/Alert"
import ItemListContainer from "./components/products/ItemListContainer"

function App() {

  return (
    
    <>
      <Nav/>
      <div className="flex justify-start items-start">
        {/* <AlertWithInput/> {/*SE SOLICITA 2 VECES EL INPUT DEL PROMPT POR EL <React.StrictMode> DEL MAIN, BASTA CON COMENTARLO EN DESARROLLOasdasd */}
        {/* <ItemListContainer greeting="Bienvenido al ecommerce del anime"/> */}

        <ItemListContainer greeting="Bienvenido al eccomerce"/>



        <TextInput/>
      </div>
    </>
  )
}

export default App
