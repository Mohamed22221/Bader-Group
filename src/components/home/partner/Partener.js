import { Container } from '@mui/material'
import React from 'react'
import "./Partener.scss"
import decoEnergy from '../../../assets/deco-energy.png'
import foreign from '../../../assets/foreign.png'


const Partener = () => {
  return (
    <div className='glopal-margin main-partener'>
     <Container maxWidth="xl" className='container' >
      <div className='one-ministey img-1'>
       <img src={decoEnergy} alt="decoEnergy" />
      </div>
      <div className='one-ministey img-2'>
      <img src={foreign} alt="foreign" />

     </div>


     </Container>
     </div>
  )
}

export default Partener