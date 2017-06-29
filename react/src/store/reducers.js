import {combineReducers} from "redux"
import abilities from "./abilities/reducer"
import achievements from "./achievements/reducer"
import application from "./application/reducers"
import disciplines from "./disciplines/reducer"
import habits from "./habits/reducers"
import lessons from "./lessons/reducer"
import wallpapers from "./wallpapers/reducer"

const rootReducer = combineReducers({
    abilities,
    achievements,
    application,
    disciplines,
    habits,
    lessons,
    wallpapers
})

export default rootReducer