import { createAction } from "utils/store"
import ActionType from "store/action-type"
import * as HabitScale from "store/habits/habit-scales"
import { FormInputMessageType } from "elements/form"

export function clearCreateState() {
    return createAction(ActionType.CLEAR_CREATE_STATE)
}

export function setInvalidHabitName(value) {
    return createFieldValidationAction(ActionType.SET_INVALID_HABIT_NAME, value, false, "The name isn't long enough yet. It needs at least 6 characters.")
}

export function setInvalidHabitScale() {
    return createFieldValidationAction(ActionType.SET_INVALID_HABIT_SCALE, HabitScale.NONE, false, "You haven't chosen a valid scale for your habit. Choose one of the provided options.")
}

export function setValidHabitDesc(value) {
    return createFieldValidationAction(ActionType.SET_VALID_HABIT_DESC, value, true, "Cool. That's description is fine.")
}

export function setValidHabitName(value) {
    return createFieldValidationAction(ActionType.SET_VALID_HABIT_NAME, value, true, "Cool. That name is fine.")
}

export function setValidHabitScale(value) {
    return createFieldValidationAction(ActionType.SET_VALID_HABIT_SCALE, value, true, `Great! You've set the habit's scale to occur ${value.toLowerCase()}.`)
}

export function wipeCreateState() {
    return async dispatch => {
        dispatch(clearCreateState())

        return await Promise.resolve()
    }
}

export function validateDescInput(newDesc) {
    return async function (dispatch) {
        dispatch(setValidHabitDesc)

        return await Promise.resolve()
    }
}

export function validateNameInput(newName) {
    return async function (dispatch) {
        const isValid = !!newName && newName.length > 5

        if (isValid) {
            dispatch(setValidHabitName(newName))
        } else {
            dispatch(setInvalidHabitName(newName))
        }
        
        return await Promise.resolve()
    }
}

export function validateScaleInput(newScale) {
    return async function(dispatch) {
        const isValid = newScale && newScale !== HabitScale.NONE && !!Object.keys(HabitScale).map(key => HabitScale[key]).find(scale => scale === newScale)

        if (isValid) {
            dispatch(setValidHabitScale(newScale))
        } else {
            dispatch(setInvalidHabitScale())
        }

        return await Promise.resolve()
    }
}

export function validateNewHabit() {
    return async function (dispatch, getState) {
        const { habits } = getState()
        const values = habits.create
        const invalidValues = Object
            .keys(values)
            .map(key => values[key])
            .filter(state => !state.isValid)
        const result = invalidValues.length > 0 
            ? { isValid: false, invalidValues } 
            : { isValid: true, habit: { name: values.name.value, desc: values.desc.value, scale: values.scale.value } }

        return result.isValid 
            ? await Promise.resolve(result.habit) 
            : await Promise.reject(result.invalidValues)
    }
}

function createFieldValidationAction(actionType, value, isValid, messageText, messageType) {
    return createAction(actionType, {
        value,
        isValid,
        message: {
            text: messageText,
            type: isValid ? FormInputMessageType.SUCCESS : FormInputMessageType.ERROR
        }
    })
}