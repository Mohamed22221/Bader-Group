import React from 'react'
import "./Fotter.scss"
import { Container } from '@mui/material'
import LogoFotter from "../../assets/logoFotter.svg"
import { MdDone } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';


//img ministries 
import ministry1 from "../.././assets/ministry1.svg"
import ministry2 from "../.././assets/ministry2.svg"
import ministry3 from "../.././assets/ministry3.svg"
import ministry4 from "../.././assets/ministry4.svg"
import ministry5 from "../.././assets/ministry5.svg"
//img partners
import partners1 from "../.././assets/partners1.svg"
import partners2 from "../.././assets/partners2.svg"
import partners3 from "../.././assets/partners3.svg"
import partners4 from "../.././assets/partners4.svg"
import partners5 from "../.././assets/partners5.svg"
//icons social
import face from "../.././assets/Iconfacebook.svg"
import linked from "../.././assets/Iconlinkedin.svg"
import mail from "../.././assets/Iconmail.svg"
import twitter from "../.././assets/Icontwitter.svg"
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';




const Fotter = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='main-fotter'>
      <Container maxWidth="xl"  >
        <div className='container'>
        <div className='img'>
          <img src={LogoFotter} alt="LogoFotter" />
        </div>
        <div className='column'>
        <h3>{t("fotter.title-sitmap")}</h3>
        <NavLink to="/Bader-Group">{t("nav.home")}{i18n.language === "ar"?<BsArrowLeft />:<BsArrowRight/>}</NavLink>
        <NavLink to="/about">{t("nav.about")}{i18n.language === "ar"?<BsArrowLeft />:<BsArrowRight/>}</NavLink>

        <NavLink to="/projects" >{t("nav.projects")}{i18n.language === "ar"?<BsArrowLeft />:<BsArrowRight/>}</NavLink>
        <NavLink to="/sector">{t("nav.our-sector")}{i18n.language === "ar"?<BsArrowLeft />:<BsArrowRight/>}</NavLink>
        </div>
        <div className='column'>
        <h3>{t("fotter.title-help")}</h3>
        <a href='#Contact'>{t("nav.contact-us")}{i18n.language === "ar"?<BsArrowLeft />:<BsArrowRight/>}</a>
        <a href='#'>{t("nav.faq")}{i18n.language === "ar"?<BsArrowLeft />:<BsArrowRight/>}</a>
        <a href='#'>{t("nav.policies")}{i18n.language === "ar"?<BsArrowLeft />:<BsArrowRight/>}</a>
        </div>
        <div className='ministries'>
        <h3>{t("fotter.title-governmental")}</h3>
          <div className='ministries-line'>
            
            <img src={ministry1} alt="ministry1" />
            <img src={ministry2} alt="ministry2" />
            <img src={ministry3} alt="ministry3" />
            <img src={ministry4} alt="ministry4" />
            <img src={ministry5} alt="ministry5" />
          </div>
          <h3>{t("fotter.title-partners")}</h3>
          <div className='ministries-line'>
         
          <img src={partners1} alt="partners1" />
          <img src={partners2} alt="partners2" />
          <img src={partners3} alt="partners3" />
          <img src={partners4} alt="partners4" />
          <img src={partners5} alt="partners5" />

          </div>

        </div>
        <div className='subscribe'>
          <div className='subscribe-line'>
          <h3>{t("fotter.title-subscribe")}</h3>
          <input placeholder='Subscribe now' />
          <button className={i18n.language === "en"?" btn-right ":" btn-left "}><MdDone /></button>
          </div>
          <div className='subscribe-line'>
            <h4>{t("fotter.title-Follow")}</h4>
            <div className='social'>
            <a href='#'><img src={face} alt="face" /></a>
            <a href='#'><img src={linked} alt="linked" /></a>
            <a href='#'><img src={twitter} alt="twitter" /></a>
            <a href='#'><img src={mail} alt="mail" /></a>
            </div>

          </div>
        </div>
        </div>
        <div className='cookies'>
          <div>
          <p>{t("fotter.title-name")}</p>
          </div>
          <div className='links'>
          <a href=''>{t("fotter.terms")}</a>
          <a href=''>{t("fotter.cookies")}</a>
          <a href=''>{t("fotter.title-privacy")}</a>

          </div>
        </div>
      </Container>
    </div>
  )
}

export default Fotter