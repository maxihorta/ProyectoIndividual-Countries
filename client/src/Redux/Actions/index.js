import axios from "axios"

import {     GET_COUNTRY,
    GET_COUNTRYID,
    BY_NAME,
    GET_COUNTRY_DETAIL,
FILTER_ACTIVITY,
    NEXT_PAGE,
 PREV_PAGE,
 PAGE,
 FILTER_CONTINENT,
 ORDER,
 ORDER_POPULATION,
 GET_ACTIVITY,
 ERRORCOUNTRY,

 } from "./ActionsTypes"

// countries
export const getCountry = () =>{
    return async (dispatch)=> {
        const response = (await axios.get("http://localhost:3001/countries/")
        ).data;
        
        return dispatch ({
            
            type:GET_COUNTRY,
            payload:response,
            
        }) 
        
    }

}


export const getCountryId = (id) =>{
    return async (dispatch)=> {
        const response = (await axios.get(`http://localhost:3001/countries/${id}`)
        ).data
         
        return dispatch ({
            type:GET_COUNTRYID,
            payload:response,
           
        })
    }
}


export function getCountryDetail(id) {
    return async function (dispatch) {
        return axios.get(`/countries/${id}`)
            .then((response) => {
                dispatch({
                    type: GET_COUNTRY_DETAIL,
                    payload: response.data
                })
            })
    }
}


export function getByName(name) {
    return async function (dispatch) {
       try{
            const res = await axios.get(`http://localhost:3001/countries/?name=${name}`)
           
             dispatch({
                type: BY_NAME,
                payload: res.data
            })
        } catch (error) {
           
            dispatch({
                type: ERRORCOUNTRY,
                payload: "error"
            })
            
            
            
        }
    }
}





export function postActivity(payload) {
    return async function () {
        try {
            const res = await axios.post(`http://localhost:3001/activities`, payload)
            return res;
        } catch (error) {
            console.log(error)
            
      
        }
    }
}
// filters

export function filterContinent(continent) {
   
                return {
                    type: FILTER_CONTINENT,
                    payload: continent,
                }
            
    }

    export function filterActivity(activity) {
   
        return {
            type: FILTER_ACTIVITY,
            payload: activity,
        }
    
}
    export const getActivity = () =>{
        return async (dispatch)=> {
            const response = (await axios.get("http://localhost:3001/activities")
            ).data;
            
            return dispatch ({
                
                type:GET_ACTIVITY,
                payload:response,
                
            })   
        }
    }

export function orderCards(order) {
   
    return {
        type: ORDER,
        payload: order,
    }

}

export function Area(area) {
   
    return {
        type: AREA,
        payload: area,
    }

}
export function orderPopulationCards(orderPo) {
   
    return {
        type: ORDER_POPULATION,
        payload: orderPo,
    }

}


export function nextPage(){
    return{
        type:NEXT_PAGE,
    }
}
export function prevPage(){
    return{
        type: PREV_PAGE,
    }
}

export function Page(){
    return{
        type: PAGE,
    }
}