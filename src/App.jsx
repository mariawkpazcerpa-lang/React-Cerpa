import { useState } from 'react'
import {About} from './Components/About/About.jsx'
import {Header} from './Components/Header/Header.jsx'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <About />
      </main>
    </>
  )
}

export default App
