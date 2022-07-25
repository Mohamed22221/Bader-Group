import { Container } from '@mui/material'
import React from 'react'
import slider1 from "../../../assets/project1.svg"
import "./HeaderAbout.scss"
import { useTranslation } from 'react-i18next'

const HeaderAbout = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='main-slider glopal-margin'>
     <Container maxWidth="xl" className='container' >
       <div className='left-slider'>
        <h1>{t("about.title-header")}</h1>
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