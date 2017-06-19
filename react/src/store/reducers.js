import {combineReducers} from "redux"
import achievements from "./achievements/reducer"
import application from "./application/reducers"
import habits from "./habits/reducers"
import wallpapers from "./wallpapers/reducer"

const rootReducer = combineReducers({
    achievements,
    application,
    habits,
    wallpapers
})

export default rootReducer