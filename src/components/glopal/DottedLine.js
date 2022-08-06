import React  from 'react'
import dottedline from "../../assets/dottedLine.svg"
const DottedLine = ({title}) => {
  
  return (
    <div className='dotted-img'>
     <img src={dottedline} alt='dottedline' />
     <span>{title}</span>
    </div>
  )
}
export default DottedLine