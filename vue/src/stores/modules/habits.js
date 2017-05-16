import * as types from "@/stores/mutation-types"
import * as scales from "@/stores/modules/scale-types"

function isValidHabit(habit) {
    let validation = {errors: [], failed: false}

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

export default {
    namespaced: true,

    state: {
        habits: [{
            id: 1,
            name: "Habit 1",
            desc: "This is the first habit.",
            scale: scales.DAILY
        }, {
            id: 2,
            name: "Habit 2",
            desc: "I really want this one to happen.",
            scale: scales.WEEKLY
        }, {
            id: 3,
            name: "Habit 3",
            desc: "This will change my life!",
            scale: scales.DAILY
        }],
        scaleFilter: scales.NONE
    },

    getters: {
        filterHabitsByScale: state => {
            if (state.scaleFilter === scales.NONE) {
                return state.habits
            }
            
            return state.habits.filter(habit => habit.scale === state.scaleFilter)
        }
    },

    actions: {
        createHabit({commit, state}, habit) {
            let result
            let validation = isValidHabit(habit)

            if (validation.failed) {
                console.log("The new habit failed validation: ", validation.errors)
                result = Promise.reject(validation.errors)
            } else {
                let newId = Math.max.apply(null, state.habits.map(h => h.id)) + 1
                let newHabit = { ...habit, id: newId }
                // Business logic ops:
                //  - Validate the habit.
                // Perform side effects:
                //  - Do async stuff i.e. save the habit to storage (API/localStorage/etc).
                //  - Send notifications.
                //  - Etc...

                commit(types.CREATE_HABIT, newHabit)

                result = Promise.resolve(newHabit)
            }

            return result
        },
        setScaleFilter({commit}, value) {
            commit(types.SET_SCALE_FILTER, value.scaleFilter)

            return Promise.resolve()
        }
    },

    mutations: {
        [types.CREATE_HABIT](state, habit) {
            console.log(state)
            const newId = Math.max.apply(null, state.habits.map(s => s.id)) + 1

            state.habits.push({ ...habit, id: newId })
        },
        [types.SET_SCALE_FILTER](state, scaleFilter) {
            state.scaleFilter = scaleFilter
        }
    }
}