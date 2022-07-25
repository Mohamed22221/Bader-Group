import React from 'react'
import { Container } from '@mui/material'
import "./Identification.scss"
import newkuwait from '../../../assets/newkuwait.png'
import { useTranslation } from 'react-i18next'
const Identification = () => {


  const { t, i18n } = useTranslation();

  return (
    <div className='glopal-margin main-identification'>
      <Container maxWidth="xl" className='container-identification' >
      
      <div className='identification-item left-identification'>
      <img src={newkuwait} alt='left-sector' />

     </div>
      <div className='identification-item right-identification'>
      <h1>{t("sector.title-identification")}</h1>
      <p>{t("sector.p1-identification")} </p>
      <p>{t("sector.p2-identification")}</p>
      </div>
      
      </Container>
    </div>
  )
}

export default Identification