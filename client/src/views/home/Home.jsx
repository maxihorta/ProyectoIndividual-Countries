import { useSelector } from "react-redux"
import Cards from "../../components/Cards/Cards"
import NavBar from "../../components/NavBar/NavBar"
import style from "./Home.module.css"



const Home = () => {

  const allCountry = useSelector ((state)=> state.allCountry)

  return (
    <div className={style.background}>
      <NavBar  />
      
    <div className={style.title}>
      
    
      
    {allCountry=== undefined ?  null : <Cards/>
    }

    </div></div>
  )
}

export default Home