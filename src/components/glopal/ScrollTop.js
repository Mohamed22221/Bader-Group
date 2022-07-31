
import React from 'react'
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import styled from 'styled-components'

const ScrollTop = () => {
    const ScrollToTop = () =>{
        window.scrollTo(0 , 0)
    }
  return (

    <ScrollTopIcon onClick={ScrollToTop}>
        <BsFillArrowUpSquareFill />
    </ScrollTopIcon>

  )
}
const ScrollTopIcon = styled.div`
position: fixed;
z-index: 100;
bottom:50px;
right: 50px;
@media (max-width:768px) {
right: 20px;
bottom: 30px;
}
svg{
    color: var(--primary-color);
    font-size: 40px;
    cursor: pointer;
    @media (max-width:767px) {
        font-size: 35px;
}
}
`
export default ScrollTop