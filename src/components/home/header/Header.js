import { Container } from '@mui/material'
import React from 'react'
import "./Header.scss"
import headerimg from "../../../assets/header.png"
import ButtonLink from '../../glopal/ButtonLink'
const Header = () => {
  return (
    <div className='main-header'>
     
      <div className='header'>
      <Container maxWidth="xl">
       <div className='left-header'>
        <h1>Bader Construction Group</h1>
        <p>We show you our development plan and ways to participate in direct investment in Kuwait</p>
        <ButtonLink title="Hire Us" />
       </div>
       </Container>
       <div className='right-header'>
        <img src={headerimg} alt="header-img" />
       </div>
      </div>
     
     </div>
  )
}

export default Header