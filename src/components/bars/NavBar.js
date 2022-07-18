import React, { useState } from 'react'
import "./NavBar.scss"
import Logo from "../../assets/logo.svg"
import Container from '@mui/material/Container';
import { RiMenu3Fill } from 'react-icons/ri';
import { MdLanguage } from 'react-icons/md';


const NavBar = () => {
  const [toggle , setToggle] = useState(false)
  const HandelTogell = () =>{
    setToggle(!toggle)
  }
  return (
    <div className='main-nav'>
     <Container maxWidth="xl">
      <div className='navbar'>
     
     <div className='logo'>
        <img src={Logo} alt='logo' />
     </div>
     <nav className={`${toggle ===false ?" links " :" links links--open "}`}>
      <ul>
       <li className='active'>Home</li>
       <li>About US</li>
       <li>Projects</li>
       <li>Our Sector</li>
      </ul>
     
     <div className='buttons'>
      <button>العربيه<MdLanguage className='icon' /></button>
      <button>Contact us</button>
     </div>
     </nav>
     <div className='menu-icon' onClick={HandelTogell} >
       <RiMenu3Fill className='icon' />
     </div>
     </div>
     </Container>
    </div>
  )
}

export default NavBar