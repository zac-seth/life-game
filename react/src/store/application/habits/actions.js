import { createAction } from "@/utils/store"
import ActionType from "@/store/action-type"

export function setExpandedHabits(expanded) {
    return dispatch => {
        dispatch(createAction(ActionType.SET_EXPANDED_HABITS, expanded))

        return Promise.resolve()
    }
}

export function setScaleFilter(scaleFilter) {
    return dispatch => {
        dispatch(createAction(ActionType.SET_SCALE_FILTER, scaleFilter))

        return Promise.resolve()
    }
}