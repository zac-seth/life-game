import {combineReducers} from "redux"
import application from "./application/reducers"
import habits from "./habits/reducer"

const rootReducer = combineReducers({
    application,
    habits
})

export default rootReducer