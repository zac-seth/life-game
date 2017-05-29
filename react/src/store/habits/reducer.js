import names from "@/store/names"
import initialState from "./initial-state"
import * as mutations from "./mutations"

export default function reducer(previousState = initialState, action) {
    switch (action.type) {
        case names.mutations.CREATE_HABIT:
            return mutations.createHabit(previousState, action.habit)
        case names.mutations.SET_HABITS:
            return mutations.setHabits(action.habits)
        default:
            return previousState
    }
}