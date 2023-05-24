import { useEffect, useState } from "react"
import style from "./Create.module.css"
import { useDispatch, useSelector } from "react-redux"
import { getCountry } from "../../Redux/Actions"
import { postActivity } from "../../Redux/Actions"
import { Link } from "react-router-dom"
import validate from "./validate"

import Modal from "./Modal"
const Create = () => {
  const idCountrys = useSelector(state => state.allCountryOrigin)
  const allCountry = useSelector((state) => state.allCountry)
  const allActivities = useSelector((state) => state.activities)
  const dispatch = useDispatch()

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    idCountry: [],

  })

  const [error, setError] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    idCountry: "",
  })

  validate(input)


  const [modal, setModal] = useState(false)




  useEffect(() => {

    !allCountry[0] ? dispatch(getCountry()) : console.log("loaded countries")

  }, [dispatch])







  function handleSubmit(e) {
    let activity = undefined
    activity = allActivities.find(e => e.name === input.name)
    if (activity === undefined) {
      e.preventDefault();
      dispatch(postActivity(input))
      !modal ? setModal(true) : setModal(false)
    }
    else {
      e.preventDefault();
      return alert("Oops! It seems that an activity with the same name already exists. Please enter a different name.")
    }
  }


  function handleDelete(e) {
    setInput({
      ...input,
      idCountry: input.idCountry.filter(c => c !== e)
    })
  }

  function handleSelect(id) {

    const res = input.idCountry.includes(id.target.value)
    if (!res && input.idCountry.length < 12) {
      setInput({
        ...input,
        idCountry: [...input.idCountry, id.target.value]
      })

    } else { null }
    setError(
      validate({
        ...input,
        idCountry: id.target.value,
      })
    )
  }

  function handleSeason(e) {
    setInput({
      ...input,
      season: e.target.value
    })
    setError(
      validate({
        ...input,
        season: e.target.value,
      })
    )
  }
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    )

  }



  console.log(error)
  const season = ['Winter', 'Spring', 'Autumn', 'Summer'];
  return (

    !modal ? <div className={style.container}>

      <form onSubmit={handleSubmit} className={style.form}>  <h1>Create Country</h1>
        <Link to="/home"> <button className={style.buttonX}>x</button></Link>
        <div >
         {error.name ? <span className={style.errorAlertN}>{error.name}</span> :<label htmlFor="">Name:</label> } 
          <input className={style.input} name="name" value={input.name} onChange={handleChange} type="text" />
        </div>
        
        <div>
          {error.difficulty ? <span className={style.errorAlertDi}>{error.difficulty}</span> :<label htmlFor="">difficulty:</label> } 
          <input className={style.input} name="difficulty" value={input.difficulty} type="number" onChange={handleChange} />
        </div>
       
        <div>
           {error.duration ? <span className={style.errorAlertDu}>{error.duration}</span> : <label htmlFor="">Duration:</label>}
          <input className={style.input} name="duration" value={input.duration} onChange={handleChange} type="time" />

        </div>



       



        <div>
          {error.season ? <span className={style.errorAlertS}>{error.season}</span> : <label htmlFor="">Season:</label> }
          <select className={style.input} onChange={handleSeason} required>
            <option value="" hidden>Select season</option>
            {season.map(e => (
              <option value={e} name="season" key={e} >{e}</option>
            ))}
          </select>

        </div>
        




        <div>
        {error.idCountry ? <span className={style.errorAlertI}>{error.idCountry}</span> :<label>Country: </label> }
          <select className={style.input} onChange={handleSelect} required>
            < option value="" hidden>Select country</option>
            {idCountrys.map(e => (
              <option value={e.id} name="idCountry" key={e.id} onClick={() => handleDelete(e.id)} >{e.name}</option>
            ))}
          </select>


          {input.idCountry[0] ? <div className={style.countriesSelect}>
            <h2> Selected countries</h2>    <ul>
              {input.idCountry.map((i) =>

                <div className={style.containerSelect} >

                  <li key={i + i} className={style.buttonCountries} >   {i}
                    <button onClick={() => handleDelete(i)} type="button">X</button>
                  </li> </div>)}
            </ul>
          </div> : null}
        </div>

      

        <div>
          {Object.keys(error).length === 0 ? <button type="submit" className={style.send}>Create</button> : null}
        </div>
      </form>
    </div> : <Modal input={input} />

  )
}

export default Create