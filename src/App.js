import './App.css';
import React from 'react';
import Header from './containers/header/header';
import Home from './components/home/Home';
import About from './components/About/About';
import Skills from './components/skills/Skills';
import Projects from './components/Projects/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />  
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
    </>
  )
}

export default App
