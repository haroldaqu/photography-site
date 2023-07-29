import './App.css'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/js/bootstrap.js"

// Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer'
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

// Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';



function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />  
          <Route path="/projects" element={<Projects/>} />  
          <Route path="/contact" element={<Contact />} />  
        </Routes>
      <Footer /> 
    </Router>
    </>
  )
}

export default App
