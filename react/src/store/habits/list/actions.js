import { createAction } from "utils/store"
import { randomId } from "utils/strings"
import ActionType from "store/action-type"
import { getLoadedHabits } from "./initial-state"

export function insertHabit(habit) {
    return createAction(ActionType.INSERT_HABIT, habit)
}

export function setHabits(habits) {
    return createAction(ActionType.SET_HABITS, habits)
}

export function createHabit(habit) {
    return async (dispatch, getState) => {
        const { habits } = getState()
        const newHabit = { ...habit, id: randomId() }

        dispatch(insertHabit(newHabit))

        return await Promise.resolve()
    }
}

export function loadHabits() {
    return async dispatch => {
        dispatch(setHabits(getLoadedHabits()))

        return await Promise.resolve()
    }
}