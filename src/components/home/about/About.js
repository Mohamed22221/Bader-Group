import React from 'react'
import "./About.scss"
import homeAbout from "../../../assets/homeAbout.png"
import { Container } from '@mui/material'
import ButtonLink from '../../glopal/ButtonLink'
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <div >
     <Container maxWidth="xl" >
      <div className='container'>

      <div className='left-about'>
       <h3>{t("sec-about.title-about")}</h3>
       <h2>{t("sec-about.vision-about")}</h2>
       <p>{t("sec-about.paragraph-about")}</p>
       <NavLink to="/about"><ButtonLink title={t("sec-about.button-about")} /></NavLink> 
      </div>
      <div className='right-about'>
      <img  src={homeAbout} ></img>
      </div>
      </div>
     </Container>
    </div>
  )
}

export default About