import { combineReducers } from "redux"
import habits from "./habits/reducer"
import layers from "./layers/reducer"

const rootReducer = combineReducers({
    habits,
    layers
})

export default rootReducer