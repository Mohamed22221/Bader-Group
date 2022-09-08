import React, {  useState ,useEffect } from 'react'
import Buttons from './Buttons'
import { Container } from '@mui/material'
import "./Projects.scss"
import Menue from './Menue'
import axios from "axios";
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t, i18n } = useTranslation();

  // state Data filter
  const [categories, setCategories] = useState([]);
  const [allCategories , setAllCategories] = useState({
    sortAcrive : null ,
    DataSort : []
  }
  )
 // get Data axios

  useEffect(() => {
    axios.get(`https://bcg.000itkw.com/api/sliders`).then(response =>{
       setAllCategories({DataSort : [t("filter.btn-1"), ...new Set(response.data.data.map(item => i18n.language === "en" ? item.name_en : item.name_ar    ))]})
       setCategories(response.data.data)
    })
        


  }, [])
console.log(categories)
  //filter data
  
  const Filter =  (button) =>{
    if(button === t("filter.btn-1")){
      axios.get(`https://bcg.000itkw.com/api/sliders`).then(response =>{
        setCategories(response.data.data)
      })
      return;
    }
      axios.get(`https://bcg.000itkw.com/api/sliders`).then(response =>{
        setCategories(response.data.data.filter(item => i18n.language === "en" ? item.name_en === button  : item.name_ar  === button   ))
        
      })
      return;

  }



  return (
    <div className='projects glopal-margin'>
    <Container maxWidth="xl" >
      <Buttons Filter={Filter}  allCategories={allCategories} setAllCategories={setAllCategories}  />
      <Menue categories={categories}  />
    </Container>
    </div>
  )
}

export default Projects