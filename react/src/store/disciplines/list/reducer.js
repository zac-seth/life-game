import { createReducer } from "utils/store"
import ActionType from "store/action-type"
import initialState from "./initial-state"

export default createReducer({
    [ActionType.SET_DISCIPLINES](disciplines, newDisciplines) {
        return [...disciplines, ...newDisciplines]
    }
}, initialState)