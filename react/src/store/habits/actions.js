import names from "@/store/names"
import { loadedHabits } from "./initial-state"

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

export function createHabit(habit) {
    return {
        type: names.mutations.CREATE_HABIT,
        habit
    }
}

export function createHabitAsync(habit) {
    return (dispatch, getState) => {
        let validation = isValidHabit(habit)

        if (validation.failed) {
            return Promise.reject(validation.errors)
        }
        
        const state = getState()
        let newId = Math.max.apply(null, state.habits.map(h => h.id)) + 1
        let newHabit = { ...habit, id: newId }

        dispatch(createHabit(newHabit))

        return Promise
            .resolve(dispatch(createHabit(newHabit)))
            .then(action => action.habit)
    }
}

export function loadHabitsAsync() {
    return dispatch => Promise
        .resolve(loadedHabits)
        .then(habits => {
            dispatch(setHabits(habits))
        })
        .catch(error => {
            // TODO: Handle the error.
        })
}

export function setHabits(habits) {
    return {
        type: names.mutations.SET_HABITS,
        habits
    }
}

export function setScaleFilter(scaleFilter) {
    return {
        type: names.mutations.SET_SCALE_FILTER,
        scaleFilter
    }
}

export function setScaleFilterAsync(scaleFilter) {
    dispatch(setScaleFilter(scaleFilter))

    return Promise.resolve()
}