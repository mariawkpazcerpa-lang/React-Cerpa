import {Routes, Route} from 'react-router-dom'
import {ItemListContainer} from './Components/ItemListContainer/ItemListContainer.jsx'
import {ItemDetailContainer} from './Components/ItemDetailContainer/ItemDetailContainer.jsx'
import {CartView} from './Components/Cart/CartView.jsx'
import {About} from './Components/About/About.jsx'
import {Header} from './Components/Header/Header.jsx'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  )
}

export default App
