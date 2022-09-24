import React ,{useEffect,useState} from 'react'
import Carousel from "react-elastic-carousel";
import { CgClose } from 'react-icons/cg';

  //get data api
const Menue = ({categories}) => {
  const [myPhoto , setMyPhoto] = useState(null)
  const [togglePhoto , setTogglePhoto] = useState(true)

const openPhoto = (img) => {
  setMyPhoto(img)
  setTogglePhoto(false)
}
  return (
    <div className='menu'>
      <div className={togglePhoto ?"model " :"model open" }>
        <img src={myPhoto} />
        <CgClose onClick={() =>setTogglePhoto(true)} />
      </div>
     {categories.map(item =>{
      return (
       <div className='menu-item' key={item.id} >
          <Carousel key={item.category.id}>
          {item.images.map((img ,index )=>{
            return (
              <div key={index} >
                <img src={img} onClick={() => openPhoto(img)} />
              </div>
            )
  
          })}
          </Carousel>
        </div>
      )
     })
     }
    </div>
  )
}

export default Menue