import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import "./Header.scss"
import headerimg from "../../../assets/header.png"
import ButtonLink from '../../glopal/ButtonLink'
import { useTranslation } from 'react-i18next'
import TypeAnimation from 'react-type-animation';

const Header = () => {
  const { t, i18n } = useTranslation();


  return (
    <div className='main-header'>

      <div className='header'>
        <Container maxWidth="xl">
          <div className='left-header'>

            <TypeAnimation
              cursor={true}
              sequence={[t("header.title-bader")]}
              wrapper="h1"
            />
            <p>{t("header.paragraph-bader")}</p>
            <ButtonLink title={t("header.button-bader")} />
          </div>
        </Container>
        <div className="right-header">
          <img src={headerimg} alt="header-img" className={i18n.language === "en" ? 'right' : "left"} />
        </div>
      </div>

    </div>
  )
}

export default Header