import React, {useState, useEffect } from 'react'
import { Container } from '@mui/material'
import "./Contact.scss"
import axios from "axios";
import  bgContact from "../../../assets/bg-contact.svg"
import  Face from "../../../assets/Iconfacebook-black.svg"
import  Linked from "../../../assets/Iconlinkedin-black.svg"
import  Twitter from "../../../assets/Icontwitter-black.svg"
import  Mail from "../../../assets/Iconmail-black.svg"
import { useTranslation } from 'react-i18next'
import { useToasts } from 'react-toast-notifications';





const Contact = () => {
  const { t, i18n } = useTranslation();
  //api contact 
  const { addToast } = useToasts();
  const [success , setSuccess] = useState(false)
  const baseURL = "https://bcg.000itkw.com/api/contacts";
  const [post, setPost] = useState({
    name : "",
    email : "" ,
    country : "",
    phone : "" ,
    messages : ""
  });


  function createPost(e) {
    e.preventDefault()
    axios.post(baseURL, {
      name: post.name,
      email: post.email,
      phone:`${post.country + post.phone}`,
      message : post.messages,

      })
      .then((response) => {
        setPost(response.data);
        addToast("تم إضافة البيانات بنجاح.", { appearance: 'success' });
        console.log(response.data)

        setPost({
          name : "",
          email : "" ,
          phone : "" ,
          messages : "",
          country : ""
        })
      }).catch(err => {
        addToast("حدث خظأ", { appearance: 'error' });
 
      })

      
  }
  console.log(post)

  return (
    <div className='main-contact glopal-margin' id='Contact'>
     <Container maxWidth="xl"  >
      <div className='container'>
       <form onSubmit={createPost}>
        <div className='form-apout'>

         <div className='item item-about'>
          <label>{t("contact.label-name")}</label>
          <input placeholder={t("contact.placeholder-name")} required  type="text" value={post.name} onChange={(e) =>setPost({...post , name:e.target.value})} />
         </div>

         <div className='item item-about'>
          <label>{t("contact.label-mail")}</label>
          <input placeholder={t("contact.placeholder-mail")} required  type="email" value={post.email} onChange={(e) =>setPost({...post , email:e.target.value})}/>
        </div>

        </div>
        
        <div className='item form-number'>
         <label>{t("contact.label-phone")}</label>

         <div className='item-number'>
          <input placeholder='+955' type="number" required value={post.country} onChange={(e) =>setPost({...post , country:e.target.value})} />
          <input placeholder={t("contact.placeholder-phone")} required  type="number" value={post.phone} onChange={(e) =>setPost({...post , phone:e.target.value})}/>
        </div>

        </div>
        <div className='item item-massege'>
         <label>{t("contact.label-massege")}</label>
         <textarea name="reviews" value={post.messages}  onChange={(e) =>setPost({...post , messages:e.target.value})} rows="11" cols="50" maxlength="250" required ></textarea>
        </div>
        <button>{t("contact.send")}</button>
        <div className='social'>
         <p>{t("contact.or")}</p>
         <h4>{t("contact.us")}</h4>
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