import {Routes, Route} from 'react-router-dom'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.jsx'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import {CartView} from './components/Cart/CartView.jsx'
import {About} from './components/About/About.jsx'
import {Header} from './components/Header/Header.jsx'
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
