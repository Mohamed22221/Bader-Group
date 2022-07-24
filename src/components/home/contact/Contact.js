import React from 'react'
import { Container } from '@mui/material'
import "./Contact.scss"
import  bgContact from "../../../assets/bg-contact.svg"
import  Face from "../../../assets/Iconfacebook-black.svg"
import  Linked from "../../../assets/Iconlinkedin-black.svg"
import  Twitter from "../../../assets/Icontwitter-black.svg"
import  Mail from "../../../assets/Iconmail-black.svg"
import { useTranslation } from 'react-i18next'


const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className='main-contact glopal-margin' id='Contact'>
     <Container maxWidth="xl"  >
      <div className='container'>
       <form>
        <div className='form-apout'>

         <div className='item item-about'>
          <label>{t("contact.label-name")}</label>
          <input placeholder={t("contact.placeholder-name")} type="name"/>
         </div>

         <div className='item item-about'>
          <label>{t("contact.label-mail")}</label>
          <input placeholder={t("contact.placeholder-mail")} type="email"/>
        </div>

        </div>
        
        <div className='item form-number'>
         <label>{t("contact.label-phone")}</label>

         <div className='item-number'>
          <input placeholder='+955' type="number"/>
          <input placeholder={t("contact.placeholder-phone")} type="number"/>
        </div>

        </div>
        <div className='item item-massege'>
         <label>{t("contact.label-massege")}</label>
         <textarea name="comment" form="usrform" />
        </div>
        <button>{t("contact.send")}</button>
        <div className='social'>
         <p>{t("contact.or")}</p>
         <h4>{t("contact.us")}</h4>
         <div className='my-social'>
          <a href='#'><img src={Face} /></a>
          <a href='#'><img src={Twitter} /></a>
          <a href='#'><img src={Linked} /></a>
          <a href='#'><img src={Mail} /></a>


         </div>
        </div>
       </form>
       <div className='img'>
        <img src={bgContact} />
       </div>
       </div>
     </Container>
     </div>
  )
}

export default Contact