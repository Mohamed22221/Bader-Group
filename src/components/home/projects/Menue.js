import React ,{useEffect,useState} from 'react'
import Carousel from "react-elastic-carousel";
import axios from "axios";
  //get data api
const Menue = ({categories}) => {

  return (
    <div className='menu'>
     {categories.map(item =>{
      return (
       <div className='menu-item' key={item.id} > 
       {item.sliders.map((item ,index) =>{
        return (
          
          <Carousel key={index}>
          {item.images.map((img ,index )=>{
            return (
              <div key={index} >
                <img src={img} />
              </div>
            )
  
          })}
          </Carousel>
          
        )


       })
       }
          
        </div>
      
      )
     })
     }
    </div>
  )
}

export default Menue