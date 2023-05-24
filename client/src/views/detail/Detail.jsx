import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import styles from "./Detail.module.css"
import { useSelector, useDispatch } from "react-redux"
import { getCountryId } from "../../Redux/Actions"
import CountryDetails from "../../components/Details/CountryDetails/CountryDetails"
import ActivityDetails from "../../components/Details/ActivityDetails/ActivityDetails"
export default function Detail() {

const {id} = useParams()

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getCountryId(id)) 
  
  },[dispatch,id]) 


  const country = useSelector((state) => state.countryId);
  return (

    <div className={styles.container}>
      
      <div className={styles.image}><img src={country.image} alt=""  /></div>
      
      <div className={styles.opacity}></div>
      <h1 className={styles.title}>{country.name}</h1>
      <Link to="/home" ><button className={styles.close}>x</button></Link>

      <CountryDetails className={styles.detail} country={country}/>
      
        
     <ActivityDetails country={country}/>

    </div>
  )
}

