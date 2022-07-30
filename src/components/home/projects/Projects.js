import React, {  useState ,useEffect, useMemo } from 'react'
import Buttons from './Buttons'
import { Container } from '@mui/material'
import "./Projects.scss"
import Menue from './Menue'
import axios from "axios";

const Projects = () => {
  // get Data axios
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(`https://bcg.000itkw.com/api/sliders`).then(response =>{
      setCategories(response.data.data)

    })
  }, [])



  
  //filter data
  
  const Filter =  (button) =>{
    if(button === "All" ){
        setCategories(categories)
      return;
    }
      const FilterdData = categories.filter((item=> item.category_id == button ))
      setCategories(FilterdData )
    return categories
   
  }
  

  return (
    <div className='projects glopal-margin'>
    <Container maxWidth="xl" >
      <Buttons Filter={Filter}/>
      <Menue categories={categories}  />
    </Container>
    </div>
  )
}

export default Projects