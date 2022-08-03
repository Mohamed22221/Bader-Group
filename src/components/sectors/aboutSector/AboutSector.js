import { Container } from '@mui/material'
import React from 'react'
import "./AboutSector.scss"
import AboutSector1 from '../../../assets/archi.jpg'
import AboutSector2 from "../../../assets/engineer.jpg"
import { useTranslation } from 'react-i18next'

const AboutSector = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='main-About-sector glopal-margin'>
     <span className='path1'></span>
     <span className='path2'></span>
     <Container maxWidth="xl" className='container-sector' >
     <div className='sector-item left-sector'>
      <img src={AboutSector1} alt='left-sector' />
      <h1>{t("sector.title-header-1")}</h1>
      <p>{t("sector.paragraph-header-1")}</p>

     </div>
      <div className='sector-item right-sector'>
      <img src={AboutSector2} alt='left-sector' />
      <h1>{t("sector.title-header-2")}</h1>
      <p> {t("sector.paragraph-header-2")}</p>

      </div>

     </Container>
     </div>
  )
}

export default AboutSector