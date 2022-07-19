import React from 'react'
import bigdottedline from "../../assets/bigDottedLine.svg"
const BigDottedLine = ({title}) => {
  return (
    <div className='dotted-img'>
     <img src={bigdottedline} alt='bigdottedline' />
     <p>{title}</p>
     </div>
  )
}

export default BigDottedLine