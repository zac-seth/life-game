import { createReducer } from "@/utils/store"
import ActionType from "@/store/action-type"
import initialState, { getDefaultCreateState } from "./initial-state"

export default createReducer({
    [ActionType.CLEAR_CREATE_STATE](habitCreate) {
        return getDefaultCreateState()
    },
    [ActionType.SET_INVALID_HABIT_NAME](habitCreate, name) {
        return { ...habitCreate, name }
    },
    [ActionType.SET_INVALID_HABIT_SCALE](habitCreate, scale) {
        return { ...habitCreate, scale }
    },
    [ActionType.SET_VALID_HABIT_DESC](habitCreate, desc) {
        return { ...habitCreate, desc }
    },
    [ActionType.SET_VALID_HABIT_NAME](habitCreate, name) {
        return { ...habitCreate, name }
    },
    [ActionType.SET_VALID_HABIT_SCALE](habitCreate, scale) {
        return { ...habitCreate, scale }
    }
}, initialState)