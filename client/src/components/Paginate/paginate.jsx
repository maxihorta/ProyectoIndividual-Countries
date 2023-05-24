import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextPage, prevPage } from "../../Redux/Actions";
import style from "./paginate.module.css"
export default function Paginate() {
    const {numPage} = useSelector ((state)=>state)
const dispatch = useDispatch()

function next(){
dispatch(nextPage())
}

function prev(){
    dispatch(prevPage())
    }


    const allCountry = useSelector((state) => state.allCountry);

 let amountPage = Math.floor(allCountry.length / 10)  

 
    
  return (
   
    <div className={style.container}>
      {numPage>1? <button onClick={prev} className={style.prev}>Prev</button>:<div className={style.buttonNull}></div>}
     
        
        <p>{numPage} of  {amountPage===0?amountPage + 1 : amountPage}</p> 
        
      {numPage<amountPage? <button onClick={next} className={style.next}> Next </button>:<div className={style.buttonNull}></div>}
    </div>
  )
}
