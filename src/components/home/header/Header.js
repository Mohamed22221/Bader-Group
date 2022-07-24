import { Container } from '@mui/material'
import React from 'react'
import "./Header.scss"
import headerimg from "../../../assets/header.png"
import ButtonLink from '../../glopal/ButtonLink'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t, i18n } = useTranslation();


  return (
    <div className='main-header'>
     
      <div className='header'>
      <Container maxWidth="xl">
       <div className='left-header'>
        <h1>{t("header.title-bader")}</h1>
        <p>{t("header.paragraph-bader")}</p>
        <ButtonLink title={t("header.button-bader")} />
       </div>
       </Container>
       <div className="right-header">
        <img src={headerimg} alt="header-img" className={i18n.language ==="en" ? 'right' :"left" }  />
       </div>
      </div>
     
     </div>
  )
}

export default Header