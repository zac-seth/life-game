import { createReducer } from "@/utils/store"
import names from "@/store/names"
import initialState from "./initial-state"

const { mutations } = names

export default createReducer({
    [mutations.CREATE_HABIT](habits, habit) {
        return [...habits, habit]
    },

    [mutations.SET_HABITS](habits, newHabits) {
        return [...habits, ...newHabits]
    }
}, initialState)