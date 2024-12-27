import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Plans from '../components/Footer/Footer'
import Courses from '../Pages/Courses/Courses'
import AboutUs from '../Pages/AboutUs/AboutUs'

function LayoutRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/plans' element={<Plans/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/AboutUs' element={<AboutUs/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes