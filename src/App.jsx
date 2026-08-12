import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import React, { useEffect } from 'react'

import WarpSpeed from "./components/Warp/WarpSpeed"
import Cursor from './ui/cursor/Cursor'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import WhoAmi from './components/WhoAmi/WhoAmi'
import TechStack from './components/TechStack/TechStack'
import Contact from './components/contact/Contact'
import Experience from './components/Experience/Experience'


const App = () => {

  useEffect(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
      normalizeScroll: true,
    })

    ScrollTrigger.refresh();
  }, [])
  return (
    <>
      <WarpSpeed />
      <Cursor />
      <div id='smooth-wrapper'>
        <Navbar />
        <div id='smooth-content'>
          <Hero />
          <WhoAmi />
          <Projects />
          <Experience />
          <TechStack />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
