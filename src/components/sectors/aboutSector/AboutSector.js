import { Container } from '@mui/material'
import React from 'react'
import "./AboutSector.scss"
import About2 from '../../../assets/about2.png'
import project2 from "../../../assets/project2.svg"

const AboutSector = () => {
  return (
    <div className='main-About-sector glopal-margin'>
     <span className='path1'></span>
     <span className='path2'></span>
     <Container maxWidth="xl" className='container-sector' >
     <div className='sector-item left-sector'>
      <img src={About2} alt='left-sector' />
      <h1>Our vision</h1>
      <p>To be one of the leading companies in the region in various fields. – Our clients and partners shall find what completes their success. We expect their needs and fulfill them according to our self-commitment – Everyone shall be proud to work with Bader Construction Group. We create chances to achieve exceptional results and reward success. – Society shall consider us responsible and effective.</p>

     </div>
      <div className='sector-item right-sector'>
      <img src={project2} alt='left-sector' />
      <h1>Our ethics</h1>
      <p> Our culture is based on integrity and mutual respect. Our reputation in adherence to the highest ethics in work is one of our valuable rules. We undertake the responsibility of each work we perform. In Bader Construction Group, we do not tolerate any wrong behavior and ask our employees to adhere such standards and the applicable local acts.</p>

      </div>

     </Container>
     </div>
  )
}

export default AboutSector