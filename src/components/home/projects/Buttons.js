import React, { useState  ,useEffect ,memo } from 'react'
import { useTranslation } from 'react-i18next'

const Buttons = ({Filter}) => {
   const { t, i18n } = useTranslation();
 const [stateData , setStateData] = useState({
  active:null,
  ButtonsFilter : [
   { id: 1, name: "All", title: t("filter.btn-1") },
   { id: 2, name: "1", title: t("filter.btn-2") },
   { id: 3, name: "1", title: t("filter.btn-3") },

]
 })
 //index element put in => active
 const HandelIndex = (index) =>{
  setStateData({...stateData , active:stateData.ButtonsFilter[index]})
 }
 //HandellClassName
 const HandellClassName = (index) =>{
  if (stateData.ButtonsFilter[index] === stateData.active) {
   return "active"
  }else{
   return "unactive"
  }
 }
 //click filter && css active
 function HandelClickFilter(item , index) {
 Filter(item.name)
 HandelIndex(index)
 
 }
 //useEffict start select All work
 useEffect(() => { 
  setStateData({...stateData , active:stateData.ButtonsFilter[0]})
 }, [])
 


  return (
    
     <div className='buttons-filter'>
      {
      stateData.ButtonsFilter.map((item ,index) =>{
        return (
         <div key={item.id} >
         <button onClick={()=>HandelClickFilter(item ,index)} className={HandellClassName(index)} >{item.title}</button>
        </div>
        )
       })
      }
     </div>
    
  )
}

export default Buttons