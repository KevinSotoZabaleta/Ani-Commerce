import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from "./components/Navbar"
import ItemListContainer from "./components/products/ItemListContainer"
import ItemDetailContainer from './components/products/ItemDetailContainer'
import Error from "./components/Error/Error"
import Home from './components/Home/Home'

function App() {

  return (

    <>
      <BrowserRouter>
        <Nav />

        <Routes>

          <Route path="/" element={<Home />} /> {/** Pagina Principal al iniciar */}

          <Route path="/category/:categoryId" element={<ItemListContainer />} />

          <Route path="/todos" element={<ItemListContainer />} />

          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="*" element={<Error />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
