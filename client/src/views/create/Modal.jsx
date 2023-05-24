import React from 'react'
import style from "./Modal.module.css"
import { Link, useHistory } from 'react-router-dom'


function Modal({input, errorRe}) {

const history= useHistory()

setTimeout(() => {
  history.push("/home")
}, 5000);

return (

    
    <div className={style.container}>

<Link to="/home"  ><button className={style.buttonHome}>home</button></Link> 
<h1>Submitted Activity</h1>
<div className={style.info}>

<h2>Name:  {input.name}</h2>
<h2>Difficulty:  {input.difficulty}</h2>
<h2>Duration:  {input.duration}</h2>
<h2>Season:  {input.season}</h2>
<h2>ID countries related to the activity: <div className={style.idCountry}>{input.idCountry.toString().replace(/,/g, '-')}</div> </h2>
</div>
<h3>Redirecting home in 5 seconds......</h3>

</div>
  )
}

export default Modal
