import React from 'react'
import "./WhyBader.scss"
import { useTranslation } from 'react-i18next'
import { Container } from '@mui/material';
const WhyBader = () => {
 const { t, i18n } = useTranslation();
  return (
    <div className='main-Kuwait2 ' dir='ltr'>
     <Container maxWidth="xl" className='container' >
      <div className='about'>
       <h1 >{t("about.why")} <p>{t("about.bader-groub")}</p> </h1>
       <p className='about-bader'>{t("about.paragraph-sec3")} </p>
      </div>
      </Container>
     </div>
  )

}

export default WhyBader