import React from 'react'
import Container from '@mui/material/Container';
import "./Counter.scss"
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useTranslation } from 'react-i18next'


const Counter = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='main-counter glopal-margin'>
     <span className='line1'></span>
     <span className='line2'></span>
     <span className='line3'></span>

     <Container maxWidth="xl" className='container'>
      <div>
        <span>+</span>
      <CountUp className="content" end={550} duration={0.8} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
      </CountUp>
       <h2>{t("count.CountUp1")}</h2>
      </div>
      <div>
        <span>+</span>
      <CountUp className="content" end={950} duration={0.8} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
      </CountUp>
       <h2>{t("count.CountUp2")}</h2>
      </div>
      <div>
        <span>+</span>
      <CountUp className="content" end={650} duration={0.8} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
      </CountUp>
       <h2>{t("count.CountUp3")}</h2>
      </div>
      <div>
        <span>+</span>
      <CountUp className="content" end={1050} duration={0.8} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
      </CountUp>
       <h2>{t("count.CountUp4")}</h2>
      </div>
     </Container>
     
     </div>
  )
}

export default Counter