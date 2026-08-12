import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import React, { useEffect, useState } from 'react'

import WarpSpeed from "./components/Warp/WarpSpeed"
import Cursor from './ui/cursor/Cursor'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import WhoAmi from './components/WhoAmi/WhoAmi'
import TechStack from './components/TechStack/TechStack'
import Contact from './components/contact/Contact'
import Experience from './components/Experience/Experience'
import Loader from './components/Loader/Loader'


const App = () => {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
      normalizeScroll: true,
    })

    ScrollTrigger.refresh();

    const dismissLoader = window.setTimeout(() => setShowLoader(false), 1600)
    return () => window.clearTimeout(dismissLoader)
  }, [])
  return (
    <>
      {showLoader && <Loader />}
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
