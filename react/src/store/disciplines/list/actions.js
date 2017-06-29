import { createAction } from "utils/store"
import ActionType from "store/action-type"
import { getLoadedDisciplines } from "./initial-state"

export function setDisciplines(habits) {
    return createAction(ActionType.SET_DISCIPLINES, habits)
}

export function loadDisciplines() {
    return async (dispatch, getState) => {
        const { habits } = getState()

        dispatch(setDisciplines(getLoadedDisciplines(habits.list)))

        return await Promise.resolve()
    }
}