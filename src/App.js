import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/contact'
import Home from './pages/';
import About from './pages/about'
import Menu from './pages/menu';
import Dropdown from './components/Dropdown'
import { Routes, Route } from "react-router-dom";


function App() {

  const [isOpen, SetIsOpen] = useState(false)

  const toggle = () => {
    SetIsOpen(!isOpen)
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        SetIsOpen(false)
        console.log('i resizeedddd')
      }
    }

    window.addEventListener('resize', hideMenu);
    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  })


  return (
    <>
    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <Routes>
      <Route index element={<Home />}/>
      <Route path='menu' element={<Menu />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
