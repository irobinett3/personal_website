import React, { useEffect, useState } from 'react';
import Intro from './components/Intro'
import Chatbot from './components/Chatbot'
import Timeline from './components/Timeline'
import CampusInvolement from './components/CampusInvolvement'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        <div className="App">
          <Intro />
          <Chatbot />
          <Timeline />
          <Projects />
          <CampusInvolement />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
