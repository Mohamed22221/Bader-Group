import React, {  useState ,useEffect, useMemo } from 'react'
import Buttons from './Buttons'
import { Container } from '@mui/material'
import "./Projects.scss"
import Menue from './Menue'
import data from "./AllData"
import axios from "axios";

const Projects = () => {
  // get Data axios
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(`https://bcg.000itkw.com/api/categories`).then(response =>{
      setCategories(response.data.data)
    })
  }, [])
  
  //filter data
  const [menueItem , setMenueItem] = useState(data)
  const Filter = useMemo(()=> (button) =>{
    if(button === "All work" ){
      setMenueItem(data)
      return;
    }
    const FilterdData = data.filter(item => item.type == button)
    setMenueItem(FilterdData )
    return menueItem
   
  })
  

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