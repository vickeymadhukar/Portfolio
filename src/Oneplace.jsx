import React from 'react'
import Home from './component/Home'
import About from './component/About'
import Worksection from './component/Worksection'
import Skills from './component/Skills'
import GameSection from './component/GameSection'
import Contact from './component/Contact'

const Oneplace = () => {
  return (
    <main>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Worksection />
      </section>
      <section id="games">
        <GameSection />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Vikas Madhukar. Built with React & GSAP.</p>
      </footer>
    </main>
  )
}

export default Oneplace
