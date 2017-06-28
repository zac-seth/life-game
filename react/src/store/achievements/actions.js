import { createAction } from "utils/store"
import ActionType from "store/action-type"

export function setObservedAchievement(achievement) {
    return createAction(ActionType.SET_OBSERVED_ACHIEVEMENT, achievement)
}

export function setSelectedAchievement(achievement) {
    return createAction(ActionType.SET_SELECTED_ACHIEVEMENT, achievement)
}

export function unsetObservedAchievement() {
    return createAction(ActionType.UNSET_OBSERVED_ACHIEVEMENT)
}

export function unsetSelectedAchievement() {
    return createAction(ActionType.UNSET_SELECTED_ACHIEVEMENT)
}

export function toggleObservedAchievement(achievement) {
    return async (dispatch, getState) => {
        if (achievement) {
            dispatch(setObservedAchievement(achievement))
        } else {
            dispatch(unsetObservedAchievement())
        }

        return await Promise.resolve()
    }
}

export function toggleSelectedAchievement(achievement) {
    return async (dispatch, getState) => {
        if (achievement) {
            dispatch(setSelectedAchievement(achievement))
        } else {
            dispatch(unsetSelectedAchievement())
        }

        return await Promise.resolve()
    }
}