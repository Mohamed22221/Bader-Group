import React from 'react'

const Menue = ({menueItem}) => {
  return (
    <div className='menu'>
     {
     menueItem.map(item =>{
      return (
       <div className='menu-item' key={item.id}>
        <div className='img-menu'>
         <img src={item.img} alt="project" />
        </div>
       </div>
      )
     })
     }
    </div>
  )
}

export default Menue