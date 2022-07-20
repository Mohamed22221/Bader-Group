import React from 'react'
import HeaderSec_1 from '../components/glopal/HeaderSec_1'
import AboutSector from '../components/sectors/aboutSector/AboutSector'
import Identification from '../components/sectors/identification/Identification'
import ProjectsComponent from "../components/home/projects/Projects"
import Counter from '../components/home/counter/Counter'
import DottedLine from '../components/glopal/DottedLine'
import Partener from '../components/home/partner/Partener'

const Sectors = () => {
  return (
    <>
    <HeaderSec_1 title="Our Sectors"  />
    <AboutSector />
    <Identification />
    <ProjectsComponent />
    <DottedLine />
    <Counter />
    <DottedLine />
    <Partener />
    </>
  )
}

export default Sectors