import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import Footer from './pages/Footer'
import Header from './pages/Header'
import Home from './pages/Home'
import Error from './pages/Error'



const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/*'} element={<Error />} />
        <Route path={'/'} element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App