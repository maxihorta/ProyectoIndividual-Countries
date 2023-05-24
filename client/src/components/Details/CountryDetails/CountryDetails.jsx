import React from 'react'
import styles from "./CountryDetails.module.css"
export default function CountryDetails({country}) {
  return (
    <div>
            <div className={styles.detail}>
        <h2>Country Data:</h2>
        <h3 >Code: {country.id}</h3>
        <h3>Continent: {country.continent}</h3>
        <h3>Capital: {country.capital}</h3>
        <h3>Subregion: {country.subregion}</h3>
        <h3>Area: {country.area}</h3>
        <h3>Population: {country.population}</h3>
      </div>

    </div>
  )
}
