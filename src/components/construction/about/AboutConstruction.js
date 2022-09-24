import { Container } from '@mui/material'
import React from 'react'
import aboutimg from "../../../assets/about-img.jpg"
import aboutimg2 from "../../../assets/about-img2.jpg"
import { useTranslation } from 'react-i18next'

import "./AboutConstruction.scss"
const AboutConstruction = () => {
  const { t, i18n } = useTranslation();
 return (
  <Container maxWidth="xl" className='container'>
   <div className='main-construction'>
    <div className='left-construction'>
     <h5>{t("header.title-bader")}</h5>
     <h1>{t("contracting.dsc-company")}</h1>
     <p>{t("contracting.about-company")}</p>

    </div>
    <div className='right-construction'>
     <img src={aboutimg2} alt="aboutimg" />

    </div>
   </div>
   <div className='main-construction'>
   <div className='right-construction'>
     <img src={aboutimg} alt="aboutimg" />

    </div>
    <div className='left-construction two'>
     <h5>{t("header.title-bader")}</h5>
     <h1>{t("contracting.our-mission")}</h1>
     <p>{t("contracting.about-mission")}</p>

    </div>

   </div>
  </Container>

 )
}

export default AboutConstruction