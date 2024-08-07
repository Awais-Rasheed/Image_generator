import React from 'react'
import Home from './Pages/Home/Home'
import Generator from './Pages/Text_generator/Generator';
import { Route, Routes } from 'react-router-dom';
import ImageGenerator from './Pages/Image_generator/ImageGenerator';
import ImageAnalyzer from './Pages/Image_analyzer/ImageAnalyzer';
import LandingPage from './Pages/LandingPage/LandingPage';

export default function App_Routes() {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path="/generator" element={<Generator />} />
      <Route path="/image_generator" element={<ImageGenerator />} />
      <Route path="/analyzer" element={<ImageAnalyzer />} />
      <Route path='/' element={<LandingPage />} />
    </Routes>
  )
}
