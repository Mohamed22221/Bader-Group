import React from 'react'
import Counter from '../components/home/counter/Counter'
import DottedLine from '../components/glopal/DottedLine'
import About from '../components/home/about/About'
import Header from '../components/home/header/Header'

import Projects from '../components/home/projects/Projects'
import Partener from '../components/home/partner/Partener'


const Home = ({counter}) => {
  return (
    <>
     
     <Header />
     <About />
     <DottedLine />
     <Projects />
     <DottedLine />
     <Counter counter={counter} />
     <DottedLine />
     <Partener />
     
     
    </>
  )
}

export default Home