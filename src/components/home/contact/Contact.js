import React from 'react'
import { Container } from '@mui/material'
import "./Contact.scss"
import  bgContact from "../../../assets/bg-contact.svg"
import  Face from "../../../assets/Iconfacebook-black.svg"
import  Linked from "../../../assets/Iconlinkedin-black.svg"
import  Twitter from "../../../assets/Icontwitter-black.svg"
import  Mail from "../../../assets/Iconmail-black.svg"


const Contact = () => {
  return (
    <div className='main-contact glopal-margin' id='Contact'>
     <Container maxWidth="xl"  >
      <div className='container'>
       <form>
        <div className='form-apout'>

         <div className='item item-about'>
          <label>Write Your Full name</label>
          <input placeholder='Full name here' type="name"/>
         </div>

         <div className='item item-about'>
          <label>Write Your Mail Address</label>
          <input placeholder='example@example.com' type="email"/>
        </div>

        </div>
        
        <div className='item form-number'>
         <label>Your Phone Number</label>

         <div className='item-number'>
          <input placeholder='+955' type="number"/>
          <input placeholder='Phone Number' type="number"/>
        </div>

        </div>
        <div className='item item-massege'>
         <label>Project Details</label>
         <textarea name="comment" form="usrform" />
        </div>
        <button>SEND</button>
        <div className='social'>
         <p>OR</p>
         <h4>You Can Contact Us Through</h4>
         <div className='my-social'>
          <a href='#'><img src={Face} /></a>
          <a href='#'><img src={Twitter} /></a>
          <a href='#'><img src={Linked} /></a>
          <a href='#'><img src={Mail} /></a>


         </div>
        </div>
       </form>
       <div className='img'>
        <img src={bgContact} />
       </div>
       </div>
     </Container>
     </div>
  )
}

export default Contact