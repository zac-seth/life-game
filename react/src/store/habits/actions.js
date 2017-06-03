import { createAction } from "@/utils/store"
import names from "@/store/names"
import { loadedHabits } from "./initial-state"

const { mutations } = names

export function createHabit(habit) {
    return (dispatch, getState) => {
        let validation = isValidHabit(habit)

        if (validation.failed) {
            return Promise.reject(validation.errors)
        }
        
        const state = getState()
        let newId = Math.max.apply(null, state.habits.map(h => h.id)) + 1
        let newHabit = { ...habit, id: newId }

        dispatch(createAction(mutations.CREATE_HABIT, newHabit))

        return Promise.resolve()
    }
}

export function loadHabits() {
    return dispatch => {
        dispatch(createAction(mutations.SET_HABITS, loadedHabits))

        return Promise.resolve()
    }
}

export function setScaleFilter(scaleFilter) {
    dispatch(createAction(mutations.SET_SCALE_FILTER, scaleFilter))

    return Promise.resolve()
}

function isValidHabit(habit) {
    let validation = { errors: [], failed: false }

    // TODO: Create validation util module.
    if (!habit.name) {
        validation.failed = true
        validation.errors.push({ prop: "name", message: "Please provide a name" })
    }
    if (!habit.desc) {
        validation.failed = true
        validation.errors.push({ prop: "desc", message: "Please provide a description" })
    }

    return validation
}