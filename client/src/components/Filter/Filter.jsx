import React from "react"
import StyleFilter from "./Filter.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { orderCards, filterContinent, orderPopulationCards, getActivity, filterActivity} from '../../Redux/Actions'
import { useEffect } from "react"


export default function Filter() {

const dispatch = useDispatch()
const allActivity = useSelector((state)=> state.activities)

useEffect(() => {
  
   dispatch(getActivity())
   
 },[dispatch]) 





   function handlerOrder(e) {
 
    const { value} =e.target
    dispatch(orderCards(value))
  }

  
 
  
  function handlerOrderPopulation(e) {
    e.preventDefault()
    const { value} = e.target
    dispatch(orderPopulationCards(value))
  }
  
  function handlerFilter(e) {
    e.preventDefault()
    
    const { value} =e.target
    dispatch(filterContinent(value))
  }
 
  function handlerActivity(e) {
    e.preventDefault()
    
    const { value} =e.target
    dispatch(filterActivity(value))
  }





  
 
  return (
    <div className={StyleFilter.container}>
      <select className={StyleFilter.order} onChange={handlerOrder} name="order">
      
        <option value="A">A-Z</option>
        <option value="Z">Z-A</option>
      </select>



      <select className={StyleFilter.continent} onChange={handlerFilter} name="filterContinent" defaultValue={"DEFAULT"}>
      <option value="DEFAULT"  >All Continent</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antartica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        <option value="South America">South America</option>
      </select>

    
      <select className={StyleFilter.orderPopulation} onChange={handlerOrderPopulation} name="orderPopulation">
      <option value="DEFAULTPOP" hidden >Population</option>
        <option value="min">Min population</option>
        <option value="max">Max Population</option>
      </select>

      <select className={StyleFilter.filterActivity} onChange={handlerActivity}  name="filterActivity">
        <option value="d" hidden>Activities</option>
        
      <option value="DEFAULT"  >All Countries</option>
      <option value="ALLACTIVITY"  >All Activities</option>
      {allActivity?.map((allActivity) => (
          <option key={allActivity.id}>{allActivity.name}</option>
        ))}

      </select>




    </div>
  )
}
