import {
    GET_COUNTRY,
    GET_COUNTRYID,
    NEXT_PAGE,
    PREV_PAGE,
    PAGE,
    BY_NAME,
    FILTER_CONTINENT,
    ORDER,
    ORDER_POPULATION,
    GET_ACTIVITY,
    FILTER_ACTIVITY,
    ERRORCOUNTRY
    
} from "./../Actions/ActionsTypes"

let initialState = {
    allCountry: [],
    allActivity: [],
    activities: [],
    countryId: [],
    numPage: 1,
    allCountryOrigin: [],
    allCountryFilter: [],

};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_COUNTRY:
            return {
                ...state,
                allCountry: payload,
                allCountryOrigin: payload,
                allCountryFilter: payload,
                allActivity: payload,
            }

        case GET_COUNTRYID:
            return {
                ...state,
                countryId: payload
            }

        case GET_ACTIVITY:
            const getActivity = payload
            const setObj = new Set();
            let Activity = getActivity.reduce((acc, activity) => {
                if (!setObj.has(activity.name)) {
                    setObj.add(activity.name, activity)
                    acc.push(activity)
                }
                return acc
            }, []);
           
            return {
                ...state,
                activities: Activity
            }





        case NEXT_PAGE:
            return {
                ...state,
                numPage: state.numPage + 1
            }

        case PREV_PAGE:
            return {
                ...state,
                numPage: state.numPage - 1
            }

        case PAGE:
            return {
                ...state,
                numPage: 1
            }






        case FILTER_ACTIVITY:
            const allActivities = state.allActivity;
            console.log(state.allActivity)
            const activityFilter = payload === 'ALLACTIVITY' ? allActivities.filter(e => e.activities.length > 0) : payload === 'DEFAULT' ? state.allCountryOrigin :
                allActivities.filter(c => c.activities.find((element) => element.name === payload))
            return {
                ...state,
                allCountry: activityFilter,
                allCountryFilter: state.allCountryOrigin.filter(e => e.activities.length > 0),
                numPage: 1
            }

        case FILTER_CONTINENT:
            const allContinents = state.allCountryFilter;
            const continentFilter = payload === 'DEFAULT' ? state.allCountryOrigin :
                allContinents.filter(f => f.continent === payload)
            return {
                ...state,
                allCountry: continentFilter,
                allActivity: continentFilter,
                numPage: 1,
            }

         
    
        case BY_NAME:
            return {
                ...state,
                allCountryFilter: payload,
                allActivity: payload,
                allCountry: payload,
                numPage: 1,
            }

        case ERRORCOUNTRY:
           
            return {
                ...state,
                allCountry: payload
            }

        case ORDER:
            const newOrder = state.allCountry.sort((a, b) => {
                if (a.name > b.name) {
                    return "A" === payload ? 1 : -1
                }
                if (a.name < b.name) {
                    return "Z" === payload ? 1 : -1
                }
                return 0
            })
            return {
                ...state,
                allCountry: newOrder,
            }


        case ORDER_POPULATION:
            const newOrderPopulation = payload === 'DEFAULTPO' ? state.allCountry : state.allCountry.sort((min, max) => {
                if (min.population > max.population) {
                    return "min" === payload ? 1 : -1
                }
                if (min.population < max.population) {
                    return "max" === payload ? 1 : -1
                }
                return 0
            })



            return {
                ...state,
                allCountry: newOrderPopulation,
            }

        default:
            return state;
    }
};

export default rootReducer;