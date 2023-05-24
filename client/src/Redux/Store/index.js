import {applyMiddleware, createStore, compose} from "redux"
import rootReducer from "../Reducer/index"
import thunkMiddleware from "redux-thunk"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


 const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
 )
export default store;


// import {createStore, applyMiddleware, compose} from "redux";
// import rootReducer from "./../Reducer/index";
// import thunkMiddleware from "redux-thunk"


// const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

// const store = createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(thunkMiddleware))
// )

// export default store;