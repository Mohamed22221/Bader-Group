import React, { useState } from 'react'
import "./NavBar.scss"
import Logo from "../../assets/logo.svg"
import Container from '@mui/material/Container';
import { RiMenu3Fill } from 'react-icons/ri';
import { MdLanguage } from 'react-icons/md';
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const [toggle , setToggle] = useState(false)
  const HandelTogell = () =>{
    setToggle(!toggle)
  }
  const HandelCloseMenu = () =>{
    setToggle(false)
  }
  //toogle language wepsite
    const { t, i18n } = useTranslation();
  const languageEn = () => {
    {i18n.changeLanguage("en") }
    setToggle(false)
    
  };
  const languageAR = () => {
    {i18n.changeLanguage("ar")}
    setToggle(false)
   
  };
  
  
  return (
    <div  className='main-nav'>
     <Container maxWidth="xl">
      <div className='navbar'>
     
     <div className='logo'>
     <NavLink to="/Bader-Group" onClick={HandelCloseMenu}><img src={Logo} alt='logo' /></NavLink>
     </div>
     <nav className={`${toggle ===false ?" links " :" links links--open "}`}>
      <ul>
       <NavLink to="/Bader-Group" onClick={HandelCloseMenu}><li >{t("nav.home")}</li></NavLink>
       <NavLink to="/about" onClick={HandelCloseMenu}><li>{t("nav.about")}</li></NavLink>
       <NavLink to="/projects" onClick={HandelCloseMenu}><li>{t("nav.projects")}</li></NavLink>
       <NavLink to="/sector" onClick={HandelCloseMenu}><li>{t("nav.our-sector")}</li></NavLink>
       <NavLink to="/construction" onClick={HandelCloseMenu}><li>{t("nav.construction")}</li></NavLink>

      </ul>
     
     <div className='buttons'>
      {i18n.language == "en" && <button onClick={languageAR}>العربيه<MdLanguage className='icon' /></button>}
      {i18n.language == "ar" && <button onClick={languageEn}>الانجليزيه<MdLanguage className='icon' /></button>}

      <button onClick={HandelCloseMenu}><a href='#Contact'>{t("nav.contact-us")}</a></button>
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