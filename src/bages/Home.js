import React from 'react'
import Counter from '../components/home/counter/Counter'
import DottedLine from '../components/glopal/DottedLine'
import About from '../components/home/about/About'
import Header from '../components/home/header/Header'

import Projects from '../components/home/projects/Projects'


const Home = () => {
  return (
    <>
     
     <Header />
     <About />
     <DottedLine />
     <Projects />
     <DottedLine />
     <Counter />
     <DottedLine />
     
     
    </>
  )
}

export default Home