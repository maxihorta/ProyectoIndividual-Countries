import React from 'react'
import styles from "./ActivityDetails.module.css"
export default function ActivityDetails({country}) {
  return (
    <div className={styles.detail}>   
    <h2 >Avaliable Activities:</h2>
    
     <h3><ul> {country.activities ? country.activities.map((activity) => <li key={activity.id} >{'-' + activity.name + ' recommended in ' + activity.season+' with a duration of ' +activity.duration.slice(0,2)+ ' hours and '+ activity.duration.slice(3,5)+' minutes and a difficulty of ' + activity.difficulty}</li>) : null} </ul></h3>
     
  
</div>
  )
}
