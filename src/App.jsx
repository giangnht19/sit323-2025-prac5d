import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import NavBar from './Components/NavBar/NavBar'
import EventPage from './Pages/EventPage'
import AboutPage from './Pages/AboutPage'
import BenefitPage from './Pages/BenefitPage'
import TestimonialPage from './Pages/TestimonialPage'
import ContactPage from './Pages/ContactPage'
import SignUp from './Pages/SignUp'

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/benefit" element={<BenefitPage />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
