import React from 'react'
import "./ButtonLink.scss"
import { BsArrowRight } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const ButtonLink = ({title}) => {
  const { t, i18n } = useTranslation();
  return (
    <div className='button-link'>
     <button>{title} {i18n.language === "ar"?<BsArrowLeft />:<BsArrowRight/>}</button>
    </div>
  )
}

export default ButtonLink