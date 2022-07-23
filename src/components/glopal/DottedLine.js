import React ,{memo} from 'react'
import dottedline from "../../assets/dottedLine.svg"
const DottedLine = () => {
  
  return (
    <div className='dotted-img'>
     <img src={dottedline} alt='dottedline' />
    </div>
  )
}
export default memo(DottedLine)