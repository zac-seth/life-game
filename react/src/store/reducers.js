import {combineReducers} from "redux"
import application from "./application/reducers"
import habits from "./habits/reducer"
import wallpapers from "./wallpapers/reducer"

const rootReducer = combineReducers({
    application,
    habits,
    wallpapers
})

export default rootReducer