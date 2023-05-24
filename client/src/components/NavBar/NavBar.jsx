import Filter from "../Filter/Filter"
import stylesNav from "./NavBar.module.css"
import { Link } from "react-router-dom"

import SearchBar from "../SearchBar/SearchBar"


  


const NavBar = () => {


  return (
    <div className={stylesNav.container}>
    
      
     
    <Filter/>
     <Link to="/create"><button className={stylesNav.create}>Create Activity</button></Link>
     <SearchBar/>
 


    </div>
  )
}

export default NavBar