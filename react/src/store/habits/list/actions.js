import { createAction } from "utils/store"
import ActionType from "store/action-type"
import { loadedHabits } from "./initial-state"

export function insertHabit(habit) {
    return createAction(ActionType.INSERT_HABIT, habit)
}

export function setHabits(habits) {
    return createAction(ActionType.SET_HABITS, habits)
}

export function createHabit(habit) {
    return async (dispatch, getState) => {
        const { habits } = getState()
        let newId = habits.list.length > 0 ? Math.max.apply(null, habits.list.map(h => h.id)) + 1 : 1
        let newHabit = { ...habit, id: newId }

        dispatch(insertHabit(newHabit))

        return await Promise.resolve()
    }
}

export function loadHabits() {
    return async dispatch => {
        dispatch(setHabits(loadedHabits))

        return await Promise.resolve()
    }
}