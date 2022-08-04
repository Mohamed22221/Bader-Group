import { Container } from '@mui/material'
import React from 'react'
import slider1 from "../../../assets/homeAbout.png"
import "./HeaderAbout.scss"
import { useTranslation } from 'react-i18next'

const HeaderAbout = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='main-slider '>
     <Container maxWidth="xl" className='container' >
       <div className='left-slider'>
        <h1 className={i18n.language === "en" ? 'h1 before-en' : 'h1 before-ar'  }>{t("sec-about.about")} <span>{t("sec-about.vision-about")}</span></h1>
        <p>{t("about.paragraph-header")}</p>
       </div>
       <div className='right-slider'>
        <img src={slider1} alt='right-slider' />

       </div>
     </Container>
     </div>
  )
}

export default HeaderAbout