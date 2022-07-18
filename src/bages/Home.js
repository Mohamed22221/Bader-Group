import React from 'react'
import NavBar from '../components/bars/NavBar'
import Counter from '../components/home/counter/Counter'
import Fotter from '../components/fotter/Fotter'
import DottedLine from '../components/glopal/DottedLine'
import About from '../components/home/about/About'
import Header from '../components/home/header/Header'

const Home = () => {
  return (
    <>
     <NavBar />
     <Header />
     <About />
     <DottedLine />
     <Counter />
     <DottedLine />
     <Fotter />
    </>
  )
}

export default Home