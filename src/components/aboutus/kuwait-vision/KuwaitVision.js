import React from 'react'
import "./KuwaitVision.scss"
import { useTranslation } from 'react-i18next'
import { Container } from '@mui/material';
import engineer from "../../../assets/engineer.jpg"
import twoPars from "../../../assets/twopars.svg"

const KuwaitVision = () => {
 const { t, i18n } = useTranslation();
  return (
    <div className='main-Kuwait glopal-margin'>
      <div className='left'>
       <img src={engineer} />
      </div>
      <Container maxWidth="xl" className='right'>
      <img src={twoPars} />
      <h1 className={i18n.language === "en" ? 'h1 before-en' : 'h1 before-ar'}>{t("about.kuwait")}<p>{t("sec-about.vision-about")} 2035</p> </h1>
      </Container>
     </div>
  )
}

export default KuwaitVision