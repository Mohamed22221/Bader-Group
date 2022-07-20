import React from 'react'
import "./Sec_1.scss"
import video1 from "../../assets/video1.mp4"
import image1 from "../../assets/aboutus-image1.png"
import image2 from "../../assets/aboutus-image2.png"
import image3 from "../../assets/img12.png"
import DottedLine from "../glopal/DottedLine"
import { Container } from '@mui/material'
import ButtonLink from '../glopal/BigDottedLine'


const Sec_3 = () => {
  return (
    <div>



<div className="review-container glopal-margin">

<Container maxWidth="xl" className='Align-center' >

   
           <div className="img-container">
               <img className="review-image" id="image" src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg" alt=""/>
           </div>

           <h2 className="review-name" id="name">Dr. Abdul Wahab Al Atwan</h2>
           <h4 className="review-job" id="job">President of Bader Group</h4>
           <p className="review-text" id="text">Based on the insightful and future vision of the rational Kuwaiti government and the development plan for 2020/2035, which the State of Kuwait seeks to move forward to achieve its aiming goals in line with keeping pace with the global development so as to rise above in which gives a good name to the State of Kuwait in all international forums through the system of partnership and global cooperation between countries and global companies to gain and exchange Experiences in all fields and specialties, such as (petroleum services – infrastructure projects – housing projects – roads and bridges projects – high-rise towers – major marketing & commercial complexes – power stations – water distillation & purification, etc.), and through our integrated expertise in providing services and helping support to these international companies in order to achieve our objective, and to be aspired by our desired benefit and achieve great success in the State of Kuwait.</p>

   

</Container>
</div>

<DottedLine></DottedLine>

        
    </div>
  )
}

export default Sec_3