import React from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import LayoutRoutes from './LayoutRoutes/LayoutRoutes'
import AboutUs from './Pages/AboutUs/AboutUs'
function App() {
  return (
    <>
    <div>
     
      <LayoutRoutes/>
      <Header/>
      <Home/>
      <Footer/>
      <AboutUs/>
    </div>
    </>
  )
}

export default App
