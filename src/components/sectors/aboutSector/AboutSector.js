import { Container } from '@mui/material'
import React from 'react'
import "./AboutSector.scss"
import About2 from '../../../assets/about2.png'
import project2 from "../../../assets/project2.svg"
import { useTranslation } from 'react-i18next'

const AboutSector = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='main-About-sector glopal-margin'>
     <span className='path1'></span>
     <span className='path2'></span>
     <Container maxWidth="xl" className='container-sector' >
     <div className='sector-item left-sector'>
      <img src={About2} alt='left-sector' />
      <h1>{t("sector.title-header-1")}</h1>
      <p>{t("sector.paragraph-header-1")}</p>

     </div>
      <div className='sector-item right-sector'>
      <img src={project2} alt='left-sector' />
      <h1>{t("sector.title-header-2")}</h1>
      <p> {t("sector.paragraph-header-2")}</p>

      </div>

     </Container>
     </div>
  )
}

export default AboutSector