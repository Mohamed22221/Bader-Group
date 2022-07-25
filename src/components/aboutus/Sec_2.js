import React from 'react'
import "./Sec_1.scss"
import image1 from "../../assets/aboutus-image1.png"
import image2 from "../../assets/aboutus-image2.png"
import { Container } from '@mui/material'
import ButtonLink from '../glopal/ButtonLink'
import { useTranslation } from 'react-i18next'


const Sec_2 = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>


      <Container maxWidth="xl" >
        <div className='container style-space'>
          <div className='right-about bg-sec2_about'>
            <img src={image1} />
            <img src={image2} />

          </div>
          <div className='left-about'>
            <h2 className='FontNorm'>{t("about.title-sec3")}</h2>
            <p className='aboutus-sec-2-prag'>{t("about.paragraph-sec3")}</p>
            <ButtonLink title={t("header.button-bader")} />
          </div>

        </div>
      </Container>



    </div>
  )
}

export default Sec_2