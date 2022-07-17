import React from 'react'
import "./ButtonLink.scss"
import { BsArrowRight } from 'react-icons/bs';

const ButtonLink = ({title}) => {
  return (
    <div className='button-link'>
     <button>{title} <BsArrowRight /></button>
    </div>
  )
}

export default ButtonLink