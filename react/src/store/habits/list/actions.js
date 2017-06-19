import { createAction } from "@/utils/store"
import ActionType from "@/store/action-type"
import { loadedHabits } from "./initial-state"

export function createHabit(habit) {
    return (dispatch, getState) => {
        const { habits } = getState()
        let newId = habits.list.length > 0 ? Math.max.apply(null, habits.list.map(h => h.id)) + 1 : 1
        let newHabit = { ...habit, id: newId }

        dispatch(createAction(ActionType.CREATE_HABIT, newHabit))

        return Promise.resolve()
    }
}

export function loadHabits() {
    return dispatch => {
        dispatch(createAction(ActionType.SET_HABITS, loadedHabits))

        return Promise.resolve()
    }
}

export function setScaleFilter(scaleFilter) {
    dispatch(createAction(ActionType.SET_SCALE_FILTER, scaleFilter))

    return Promise.resolve()
}