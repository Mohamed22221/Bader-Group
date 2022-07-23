import React, {  useState ,memo } from 'react'
import Buttons from './Buttons'
import { Container } from '@mui/material'
import "./Projects.scss"
import Menue from './Menue'
import data from "./AllData"

const Projects = () => {
  const [menueItem , setMenueItem] = useState(data)

  const Filter =  (button) =>{
    if(button === "All work"){
      setMenueItem(data)
      return;
    }
    const FilterdData = data.filter(item => item.type == button)
    setMenueItem(FilterdData )
    
   
  }

  return (
    <div className='projects glopal-margin'>
    <Container maxWidth="xl" >
      <Buttons Filter={Filter}/>
      <Menue menueItem={menueItem} />
    </Container>
    </div>
  )
}

export default memo(Projects)