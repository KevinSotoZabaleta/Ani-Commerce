import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from "./components/Navbar"
import ItemListContainer from "./components/products/ItemListContainer"
import ItemDetailContainer from './components/products/ItemDetailContainer'
import ItemCount from './components/ItemCount/ItemCount'
import Error from "./components/Error/Error"

function App() {

  return (

    <>
      <BrowserRouter>
        <Nav />

        <Routes>

          <Route path="/" element={<ItemListContainer/>}/>

          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>

          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          
          <Route path="*" element={<Error/>}/>

        </Routes>

      </BrowserRouter>

      {/* <ItemListContainer greeting="Bienvenido" /> */}


      {/* <ItemCount /> */}

      {/* <ItemDetailContainer /> */}

    </>
  )
}

export default App
