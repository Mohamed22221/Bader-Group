import React from 'react'
import Container from '@mui/material/Container';
import "./Counter.scss"
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useTranslation } from 'react-i18next'


const Counter = ({counter}) => {
  const { t, i18n } = useTranslation();

  return (
    <div className='main-counter glopal-margin'>
     <span className='line1'></span>
     <span className='line2'></span>
     <span className='line3'></span>

     <Container maxWidth="xl" className='container'>

        {counter.map(count =>{
          return (
            <div key={count.key}>
            <span>+</span>
            <CountUp className="content" end={count.number} duration={0.8} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
           </CountUp>
            <h2>{i18n.language ==="en" ? count.name_en : count.name_ar}</h2>
            </div>

          )
        })}
     </Container>
     
     </div>
  )
}

export default Counter