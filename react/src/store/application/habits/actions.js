import { createAction } from "@/utils/store"
import names from "@/store/names"

const { mutations } = names

export function setExpandedHabits(expanded) {
    return dispatch => {
        dispatch(createAction(mutations.SET_EXPANDED_HABITS, expanded))

        return Promise.resolve()
    }
}

export function setScaleFilter(scaleFilter) {
    return dispatch => {
        dispatch(createAction(mutations.SET_SCALE_FILTER, scaleFilter))

        return Promise.resolve()
    }
}