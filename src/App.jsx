import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Mywork from './Components/MyWork/Mywork.jsx'
import Contact from './Components/Contact/Contact.jsx'


 const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Mywork/>
      <Contact/>
    </div>
  )
}

export default App
