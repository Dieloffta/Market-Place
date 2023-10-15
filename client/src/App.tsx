import './App.scss';

import { Routes, Route } from 'react-router-dom';

import React from 'react'
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';

const App = () => {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </>
  ) 
}

export default App
