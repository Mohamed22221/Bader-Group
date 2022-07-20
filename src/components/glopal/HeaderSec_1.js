import { Container } from '@mui/system'
import React from 'react'
import "./HeaderSec_1.scss"
const HeaderSec_1 = ({title}) => {
  return (
    <div className='main-section'>
     <Container maxWidth="xl">
     <h1>{title}</h1>
     </Container>
    </div>
  )
}

export default HeaderSec_1