import { createReducer } from "utils/store"
import ActionType from "store/action-type"
import initialState from "./initial-state"

export default createReducer({
    [ActionType.SET_OBSERVED_ACHIEVEMENT](achievements, observed) {
        return {
            ...achievements,
            observed
        }
    },
    [ActionType.SET_SELECTED_ACHIEVEMENT](achievements, selected) {
        return {
            ...achievements,
            selected
        }
    },
    [ActionType.UNSET_OBSERVED_ACHIEVEMENT](achievements) {
        return {
            ...achievements,
            observed: false
        }
    },
    [ActionType.UNSET_SELECTED_ACHIEVEMENT](achievements) {
        return {
            ...achievements,
            selected: false
        }
    }
}, initialState)