import { createReducer } from "utils/store"
import ActionType from "store/action-type"
import initialState from "./initial-state"

export default createReducer({
    [ActionType.CREATE_HABIT](habits, habit) {
        return [...habits, habit]
    },

    [ActionType.SET_HABITS](habits, newHabits) {
        return [...habits, ...newHabits]
    }
}, initialState)