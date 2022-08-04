import axios from 'axios';
import React, { useState  ,useEffect ,memo } from 'react'
import { useTranslation } from 'react-i18next'

const Buttons = ({Filter  ,categories}) => {
   const { t, i18n } = useTranslation();



 //click filter && css active
 function HandelClickFilter(item , index) {
 Filter(item.category_id)

 }
console.log(categories)



  return (
    
     <div className='buttons-filter'>
      <span>{t("filter.our-project")}</span>
      {
      categories.map((item ,index) =>{
        return (
         <div key={item.id} >
         
         <button onClick={()=>HandelClickFilter(item ,index)} >{item.name_ar}</button>
        </div>
        )
       })
      }
     </div>
    
  )
}

export default Buttons