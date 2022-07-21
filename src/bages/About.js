import React from 'react'
import Sec_1 from '../components/aboutus/Sec_1'
import Sec_2 from '../components/aboutus/Sec_2'
import Sec_3 from '../components/aboutus/Sec_3'
import Sec_4 from '../components/aboutus/Sec_4'
import Partener from '../components/home/partner/Partener'
import DottedLine from '../components/glopal/DottedLine'
import HeaderAbout from '../components/aboutus/header/HeaderAbout'

const About = () => {
  return (
    <>
    <HeaderAbout />
    <Sec_1></Sec_1> 
    <Sec_2></Sec_2>
    <Sec_3></Sec_3>
    <Sec_4></Sec_4>
    <DottedLine />
    <Partener />

    </>
  )
}

export default About