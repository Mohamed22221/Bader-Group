import React from 'react'
import Counter from '../components/home/counter/Counter'
import DottedLine from '../components/glopal/DottedLine'
import About from '../components/home/about/About'
import Header from '../components/home/header/Header'
import Contact from '../components/home/contact/Contact'
import Projects from '../components/home/projects/Projects'

const Home = () => {
  return (
    <>
     
     <Header />
     <About />
     <Projects />
     <DottedLine />
     <Counter />
     <DottedLine />
     
     
    </>
  )
}

export default Home