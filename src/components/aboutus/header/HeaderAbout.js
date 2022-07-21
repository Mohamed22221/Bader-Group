import { Container } from '@mui/material'
import React from 'react'
import slider1 from "../../../assets/project1.svg"
import "./HeaderAbout.scss"

const HeaderAbout = () => {
  return (
    <div className='main-slider glopal-margin'>
     <Container maxWidth="xl" className='container' >
       <div className='left-slider'>
        <h1>Our Vision</h1>
        <p>In accordance with the modern vision and development plan, we were the pioneers and the ones who first took the initiative of its kind, our knowledge and expertise in the management of our agencies helped our agencies avoid any current or future risks as we provide special and distinctive services for each agency separately which corroborate with its specialty and its scope of work, and all this under effective management which is run by our specialized team that I have appointed with great care, they work round the clock to make sure that each agency receives the proper services it needs and we don’t stop serving each and every agency with what is required to achieve success. Along with our paramount agencies, we have the ability to see and envision becoming the leading construction firm, while delivering projects that consistently exceed international standards and provide exceptional customer satisfaction. Together with our agencies</p>
       </div>
       <div className='right-slider'>
        <img src={slider1} alt='right-slider' />

       </div>
     </Container>
     </div>
  )
}

export default HeaderAbout