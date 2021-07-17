import { combineReducers } from "redux";

const cars = (state = [], action) => {
    switch(action.type){
        case "ADD_CAR" :
            return action.value
        case "REMOVE_CAR" :
            let newState = [...state]
            newState.splice(index, 1)

            return newState
        
        default : 
            return state
    }
}

const hello = (state = null) => state
const user = (state = null) => state
const name = (state = null) => state

export default combineReducers({ hello, user, cars, name })