import { Container } from '@mui/material'
import React ,{useEffect ,useState} from 'react'
import "./Partener.scss"
import decoEnergy from '../../../assets/deco-energy.png'
import foreign from '../../../assets/foreign.png'
import { useTranslation } from 'react-i18next'
import Carousel from "react-elastic-carousel";
import axios from "axios";


const Partener = () => {
  const { t} = useTranslation();
  const [parteners, setParteners] = useState([]);
  const [parteners2, setParteners2] = useState([]);

  useEffect(() => {
    axios.get(`https://bcg.000itkw.com/api/settings`).then(response =>{
      setParteners(response.data.data.partners.box1_partners_images)
      setParteners2(response.data.data.partners.box2_partners_images)
    })
  }, [])

  
  return (
    <div className='glopal-margin main-partener'>
     <Container maxWidth="xl" className='container' >
      <div className='one-ministey img-1'>
      <Carousel>
        {parteners.map((item , index) =>{
          return (
            <div className='item-partner' key={index}>
            <img src={item}  />
            </div>
            
          )
        })}

      </Carousel>
      </div>
      <div>
        <span>{t("global.success")}</span>
      </div>
      <div className='one-ministey img-2'>
      <Carousel>
        {parteners2.map((item , index) =>{
          return (
            <div className='item-partner' key={index}>
            <img src={item}  />
            </div>
          )
        })}

      </Carousel>


     </div>


     </Container>
     </div>
  )
}

export default Partener