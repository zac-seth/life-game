import { createReducer } from "@/utils/store"
import ActionType from "@/store/action-type"
import initialState from "./initial-state"

export default createReducer({
    [ActionType.SET_EXPANDED_HABITS](state, expanded) {
        return {
            ...state,
            expanded
        }
    },
    
    [ActionType.SET_SCALE_FILTER](state, scaleFilter) {
        return {
            ...state,
            scaleFilter
        }
    }
}, initialState)