import { Container } from '@mui/material'
import React from 'react'
import "./Partener.scss"
import decoEnergy from '../../../assets/deco-energy.png'
import foreign from '../../../assets/foreign.png'
import { useTranslation } from 'react-i18next'
import Carousel from "react-elastic-carousel";


const Partener = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className='glopal-margin main-partener'>
     <Container maxWidth="xl" className='container' >
      <div className='one-ministey img-1'>
      <Carousel>
       <img src={decoEnergy} alt="decoEnergy" />
       <img src={decoEnergy} alt="decoEnergy" />
       <img src={decoEnergy} alt="decoEnergy" />
      </Carousel>
      </div>
      <div>
        <span>{t("global.success")}</span>
      </div>
      <div className='one-ministey img-2'>
      <Carousel>
      <img src={foreign} alt="foreign" />
      <img src={foreign} alt="foreign" />
      <img src={foreign} alt="foreign" />
      </Carousel>


     </div>


     </Container>
     </div>
  )
}

export default Partener