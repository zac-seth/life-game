import { createAction } from "utils/store"
import ActionType from "store/action-type"

export function setExpandedHabits(expanded) {
    return createAction(ActionType.SET_EXPANDED_HABITS, expanded)
}

export function setScaleFilter(scaleFilter) {
    return createAction(ActionType.SET_SCALE_FILTER, scaleFilter)
}

export function specifyExpandedHabits(expanded) {
    return async dispatch => {
        dispatch(setExpandedHabits(expanded))

        return await Promise.resolve()
    }
}

export function specifyScaleFilter(scaleFilter) {
    return async dispatch => {
        dispatch(setScaleFilter(scaleFilter))

        return await Promise.resolve()
    }
}