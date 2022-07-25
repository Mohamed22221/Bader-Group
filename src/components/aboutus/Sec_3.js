import React from 'react'
import "./Sec_1.scss"
import DottedLine from "../glopal/DottedLine"
import { Container } from '@mui/material'
import { useTranslation } from 'react-i18next'


const Sec_3 = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>



      <div className="review-container glopal-margin">

        <Container maxWidth="xl" className='Align-center' >


          <div className="img-container">
            <img className="review-image" id="image" src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg" alt="" />
          </div>

          <h2 className="review-name" id="name">{t("about.name-doctor")}</h2>
          <h4 className="review-job" id="job">{t("about.about-doctor")}</h4>
          <p className="review-text" id="text">{t("about.paragraph-doctor")}</p>



        </Container>
      </div>

      <DottedLine></DottedLine>


    </div>
  )
}

export default Sec_3