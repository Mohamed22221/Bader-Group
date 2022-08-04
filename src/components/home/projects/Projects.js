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

console.log(categories)

  
  //filter data
  
  const Filter =  (button) =>{
    if(button === "All" ){
      
        setCategories(categories)
      return;
    }
      const FilterdData = categories.filter((item=> item.category_id === button ))
      setCategories(FilterdData )
    return categories
   
  }

  console.log(...categories)

  return (
    <div className='projects glopal-margin'>
    <Container maxWidth="xl" >
      <Buttons Filter={Filter} {...categories} categories={categories}/>
      <Menue categories={categories}  />
    </Container>
    </div>
  )
}

export default Projects