import React from 'react'
import "./Sec_1.scss"
import video1 from "../../assets/video1.mp4"
import image1 from "../../assets/aboutus-image1.png"
import image2 from "../../assets/aboutus-image2.png"
import image3 from "../../assets/img12.png"
import DottedLine from "../glopal/DottedLine"
import { Container } from '@mui/material'
import ButtonLink from '../glopal/ButtonLink'
import { useTranslation } from 'react-i18next'

const Sec_1 = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='glopal-margin' >

      <div className='Video_sec'>
        <Container maxWidth="xl">
          <h5 className='aboutus-sec1'>{t("about.title-sec2")}</h5>

          <div className='container '>
            <video src={video1} muted type="video/mp4" autoPlay={true} preload="auto" loop></video>
          </div>

        </Container>

      </div>


    </div>
  )
}

export default Sec_1