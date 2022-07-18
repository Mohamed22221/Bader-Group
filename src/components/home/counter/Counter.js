import React from 'react'
import Container from '@mui/material/Container';
import "./Counter.scss"

const Counter = () => {
  return (
    <div className='main-counter glopal-margin'>
     <span className='line1'></span>
     <span className='line2'></span>
     <span className='line3'></span>

     <Container maxWidth="xl" className='container'>
      <div>
       <h1>+55</h1>
       <h2>Work in progress</h2>
      </div>
      <div>
       <h1>+55</h1>
       <h2>Former clients</h2>
      </div>
      <div>
       <h1>+55</h1>
       <h2>Staff</h2>
      </div>
      <div>
       <h1>+55</h1>
       <h2>Projects delivered</h2>
      </div>
     </Container>
     
     </div>
  )
}

export default Counter