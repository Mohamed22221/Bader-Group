import React from 'react'
import "./About.scss"
import twoPars from "../../../assets/twopars.svg"
import video1 from "../../../assets/video1.mp4"

import { Container } from '@mui/material'
import ButtonLink from '../../glopal/ButtonLink'
const About = () => {
  return (
    <div >
     <Container maxWidth="xl" >
      <div className='container'>

      <div className='left-about'>
       <h3>About Us</h3>
       <h2>Our Vision</h2>
       <p>In accordance with the modern vision and development plan, we were the pioneers and the ones who first took the initiative of its kind, our knowledge and expertise in the management of our agencies helped our agencies avoid any current or future risks as we provide special and distinctive services for each agency separately which corroborate with its specialty and its scope of work, and all this under effective management …….</p>
        <ButtonLink title="Read More" />
      </div>
      <div className='right-about'>
      <video  src={video1} muted type="video/mp4" autoPlay={true} preLoad="auto" loop></video>
      </div>
      </div>
     </Container>
    </div>
  )
}

export default About