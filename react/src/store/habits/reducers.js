import { combineReducers } from "redux"
import list from "./list/reducer"
import create from "./create/reducer"

const rootReducer = combineReducers({
    list,
    create
})

export default rootReducer