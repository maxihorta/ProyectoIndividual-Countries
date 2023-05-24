import React from "react"
import style from "./Cards.module.css"
import Card from "../Card/Card"
import { useDispatch, useSelector } from "react-redux";
import Paginate from "../Paginate/paginate";
import { getCountry } from "../../Redux/Actions"
import { useEffect } from "react";
const Cards = () => {
  const dispatch = useDispatch()
   const allCountry = useSelector((state) => state.allCountry);
 const {numPage } =useSelector((state) => state);
 


useEffect(() => {// es el ciclo de vida del componente
  
//  { !allCountry[0] ?    dispatch(getCountry()): console.log("ya se realizo el dispatch")  }
dispatch(getCountry())
  // return () => dispatch(clearState())  cuando se desmonta el componente
},[dispatch]) 

 

let from = ((numPage - 1) * 10 )
let to = numPage * 10
 const countries = allCountry.slice(from,to)


  return (
   <div>
    <div className={style.list}>
        {allCountry==="error"?<h2 className={style.error}>country not found</h2>:countries.map((country) => (
          <Card key={country.id} country={country} />
        ))}
        
    </div>
     <Paginate  />
   </div> 
  )
}

export default Cards;