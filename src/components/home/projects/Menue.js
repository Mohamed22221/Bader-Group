import React from 'react'
import Carousel from "react-elastic-carousel";
const Menue = ({menueItem}) => {
  return (
    <div className='menu'>
     {
     menueItem.map(item =>{
      return (
       <div className='menu-item' key={item.id}>
        
         <Carousel>
         {
          item.imges.map(item =>{
             return (
            <div className='img-menu' key={item.id}>
             <img src={item.src} />
            </div>
           )
          })

         }
         </Carousel>
        </div>
      
      )
     })
     }
    </div>
  )
}

export default Menue