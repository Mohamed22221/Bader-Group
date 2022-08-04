import axios from 'axios';
import React, { useState  ,useEffect ,memo } from 'react'
import { useTranslation } from 'react-i18next'

const Buttons = ({Filter  ,categories}) => {
   const { t, i18n } = useTranslation();
   const [active , setActive] = useState(false)


 //click filter && css active
 function HandelClickFilter(item , index) {
 Filter(item.category_id)
 setActive(item.is_active)

 }
console.log(categories)



  return (
    
     <div className='buttons-filter'>
      <span>{t("filter.our-project")}</span>
      {
      categories.map((item ,index) =>{
        return (
         <div key={item.id} >
         
         <button className={active === true ? "active" : ""} onClick={()=>HandelClickFilter(item ,index)} >{i18n.language === "en" ? item.name_en : item.name_ar}</button>
        </div>
        )
       })
      }
     </div>
    
  )
}

export default Buttons