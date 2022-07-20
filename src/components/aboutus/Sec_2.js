import React from 'react'
import "./Sec_1.scss"
import video1 from "../../assets/video1.mp4"
import image1 from "../../assets/aboutus-image1.png"
import image2 from "../../assets/aboutus-image2.png"
import image3 from "../../assets/img12.png"
import DottedLine from "../glopal/DottedLine"
import { Container } from '@mui/material'
import ButtonLink from '../glopal/ButtonLink'


const Sec_2 = () => {
  return (
    <div>


<Container maxWidth="xl" >
      <div className='container style-space'>
      <div className='right-about bg-sec2_about'>
      <img  src={image1} />  
      <img  src={image2} />  

          </div>
      <div className='left-about'>
       <h2 className='FontNorm'>Why Bader Group?</h2>
       <p className='aboutus-sec-2-prag'>Through our long experience in this field, we always make certain that those international companies (Agencies) do not encounter any obstacles, which may hinder their work during the completion of their projects. Our work team is assigned to provide consultancy and legal services, administrative, engineering, and logistical services, as well as designating a public relations department, which has a strong network of relationships with all government departments, ministries, including petroleum companies (KOC & KNPC), and private sector companies. …….</p>
        <ButtonLink title="Hire Us" />
      </div>
  
      </div>
     </Container>



    </div>
  )
}

export default Sec_2