import React from 'react'
import styles from "./SearchBar.module.css"
import { getByName } from '../../Redux/Actions'
import { useDispatch } from 'react-redux'

export default function SearchBar() {
const dispatch = useDispatch()
    function handleChange(e) {
        dispatch(getByName(e.target.value))
        
    }


    return (
       
        <form onChange={handleChange}>
    <input type="search" className={styles.search} placeholder="Search..."/>
    <svg xmlns="http://www.w3.org/2000/svg" className={styles.inputIcon} viewBox="0 0 20 20" fill="currentColor">
<path  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"  />
</svg>
  </form>
  )
}
