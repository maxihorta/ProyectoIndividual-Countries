import React from "react"
 import styles from "./Card.module.css"
import { Link } from "react-router-dom"



const Card = ({country}) => {



  return (
    
    <div className={styles.container}> 
    <h2>{country.continent}</h2>
      <Link className={styles.containerLink} to={`/detail/${country.id}`} country={country}>
       
        <h1>{country.name}</h1>
        <img src={country.image} alt="" />
        
       </Link>

    </div>
  )
}

export default Card