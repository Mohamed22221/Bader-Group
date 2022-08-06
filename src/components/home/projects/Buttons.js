import React, { useState, useEffect, memo } from 'react'
import { useTranslation } from 'react-i18next'

const Buttons = ({ Filter, setAllCategories, allCategories }) => {
  const { t } = useTranslation()
  //index button
  const HandelIndex = (index) => {
    setAllCategories({ ...allCategories, sortAcrive: allCategories.DataSort[index] })
  }
  //HandellClassName activ && unactive
  const HandellClassName = (index) => {
    if (allCategories.DataSort[index] === allCategories.sortAcrive) {
      return "active"
    } else {
      return "unactive"
    }
  }
  //click filter && css active
  function HandelClickFilter(item, index) {
    Filter(item)
    HandelIndex(index)
  }


  return (

    <div className='buttons-filter'>
      <span>{t("filter.our-project")}</span>
      {
        allCategories.DataSort.map((item, index) => {
          return (
            <div key={item.id} >

              <button onClick={() => HandelClickFilter(item, index)} className={HandellClassName(index)} >{item}</button>

            </div>
          )
        })
      }
    </div>

  )
}

export default Buttons