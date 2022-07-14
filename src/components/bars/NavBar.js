import React from 'react'
import Container from '@mui/material/Container';
import "./NavBar.scss"
import { GrLanguage } from 'react-icons/gr';
import { MdLanguage } from 'react-icons/md';
import Logo from "../../assets/logo.svg"

const NavBar = () => {
  return (
    <div className='main-nav'>
     <Container maxWidth="xl">
      <div className='navbar'>
     
     <div className='logo'>
        <img src={Logo} alt='logo' />
     </div>
     <nav className='links'>
      <ul>
       <li className='active'>Home</li>
       <li>About US</li>
       <li>Projects</li>
       <li>Our Sector</li>
      </ul>
     </nav>
     <div className='buttons'>
      <button>العربيه<MdLanguage className='icon' /></button>
      <button>Contact us</button>
     </div>
     <div className='menu-icon'>
       <GrLanguage className='icon' />
     </div>
     </div>
     </Container>
    </div>
  )
}

export default NavBar