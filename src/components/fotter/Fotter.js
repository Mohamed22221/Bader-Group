import React from 'react'
import "./Fotter.scss"
import { Container } from '@mui/material'
import LogoFotter from "../../assets/logoFotter.svg"
import { MdDone } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';

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




const Fotter = () => {
  return (
    <div className='main-fotter'>
      <Container maxWidth="xl"  >
        <div className='container'>
        <div className='img'>
          <img src={LogoFotter} alt="LogoFotter" />
        </div>
        <div className='column'>
        <h3>SITMAP</h3>
        <a href='#'>Home<BsArrowRight/></a>
        <a href='#'>About us<BsArrowRight/></a>

        <a href='#'>Our Projects<BsArrowRight/></a>
        <a href='#'>Our Sector<BsArrowRight/></a>
        </div>
        <div className='column'>
        <h3>Help</h3>
        <a href='#'>Contact Us<BsArrowRight/></a>
        <a href='#'>FAQ<BsArrowRight/></a>
        <a href='#'>Policies<BsArrowRight/></a>
        </div>
        <div className='ministries'>
        <h3>Governmental bodies</h3>
          <div className='ministries-line'>
            
            <img src={ministry1} alt="ministry1" />
            <img src={ministry2} alt="ministry2" />
            <img src={ministry3} alt="ministry3" />
            <img src={ministry4} alt="ministry4" />
            <img src={ministry5} alt="ministry5" />
          </div>
          <h3>partners</h3>
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
          <h3>Subscribe for newslatter</h3>
          <input placeholder='Subscribe now' />
          <button><MdDone /></button>
          </div>
          <div className='subscribe-line'>
            <h4>Follow us on</h4>
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
          <p>Bader Group 2022</p>
          </div>
          <div className='links'>
          <a href=''>COOKIES</a>
          <a href=''>PRIVACY</a>
          <a href=''>TERMS & CONDITIONS</a>

          </div>
        </div>
      </Container>
    </div>
  )
}

export default Fotter