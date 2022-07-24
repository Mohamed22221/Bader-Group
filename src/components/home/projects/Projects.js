import React, {  useState ,memo, useMemo } from 'react'
import Buttons from './Buttons'
import { Container } from '@mui/material'
import "./Projects.scss"
import Menue from './Menue'
import data from "./AllData"
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const [menueItem , setMenueItem] = useState(data)
  const { t, i18n } = useTranslation();
  const Filter = useMemo(()=> (button) =>{
    

    if(button === t("filter.btn-1") ){
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
      <Menue menueItem={menueItem} />
    </Container>
    </div>
  )
}

export default Projects