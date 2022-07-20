import React from 'react'
import { Container } from '@mui/material'
import "./Identification.scss"
import newkuwait from '../../../assets/newkuwait.png'

const Identification = () => {
  return (
    <div className='glopal-margin main-identification'>
      <Container maxWidth="xl" className='container-identification' >
      
      <div className='identification-item left-identification'>
      <img src={newkuwait} alt='left-sector' />

     </div>
      <div className='identification-item right-identification'>
      <h1>Bader Construction Group For General </h1>
      <p> Our culture is based on integrity and mutual respect. Our  reputation in adherence to the highest ethics in work is one of our valuable rules. </p>
      <p>We undertake the responsibility of each work we perform. In Bader Construction Group, we do not tolerate any wrong behavior and ask our employees to adhere such standards and the applicable local acts.</p>
      </div>
      
      </Container>
    </div>
  )
}

export default Identification