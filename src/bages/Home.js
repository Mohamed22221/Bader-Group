import React from 'react'
import NavBar from '../components/bars/NavBar'
import Counter from '../components/counter/Counter'
import About from '../components/home/about/About'
import Header from '../components/home/header/Header'

const Home = () => {
  return (
    <>
     <NavBar />
     <Header />
     <About />
     <Counter />
    </>
  )
}

export default Home