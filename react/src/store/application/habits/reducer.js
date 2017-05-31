import { createReducer } from "@/utils/store"
import names from "@/store/names"
import initialState from "./initial-state"

const { mutations } = names

export default createReducer({
    [mutations.SET_SCALE_FILTER](state, scaleFilter) {
        return {
            scaleFilter
        }
    }
}, initialState)