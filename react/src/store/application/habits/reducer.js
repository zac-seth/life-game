import { createReducer } from "@/utils/store"
import names from "@/store/names"
import initialState from "./initial-state"

const { mutations } = names

export default createReducer({
    [mutations.SET_EXPANDED_HABITS](state, expanded) {
        return {
            ...state,
            expanded
        }
    },
    
    [mutations.SET_SCALE_FILTER](state, scaleFilter) {
        return {
            ...state,
            scaleFilter
        }
    }
}, initialState)