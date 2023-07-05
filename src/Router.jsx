import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Portifolio from './pages/Portifolio'
import Contato from './pages/Contato'
import Footer from './components/Footer'

const Router = () => {
  return (
    <BrowserRouter>
        <Menu />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<Sobre />}/>
            <Route path='/portfolio' element={<Portifolio />}/>
            <Route path='/contato' element={<Contato />}/>
        </Routes>
        <Footer content='Feito com 💜 por Mia Luz.' />
    </BrowserRouter>
  )
}

export default Router