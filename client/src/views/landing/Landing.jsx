import React from 'react';
 import Style from "./Landing.module.css"
import {Link} from "react-router-dom"

const Landing = () => {
  return ( 
    <div className={Style.background}>
  <div className={Style.backgroundColor}>

    <div className={Style.container}>
        <h1 className={Style.title}>Descubre todos los paises del mundo y las actividades que podes realizar</h1>
        <h3 className={Style.description}>Countries App es una aplicacion destinada a mostrarte la informacion de todos los paises </h3>
        <Link to="/home" ><button className={Style.buttonHome}>Ingresar</button></Link>
       
    </div> 
    </div>
    </div>
  )
}

export default Landing