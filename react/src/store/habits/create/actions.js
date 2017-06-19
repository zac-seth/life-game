import { createAction } from "@/utils/store"
import ActionType from "@/store/action-type"
import * as HabitScale from "@/store/habits/habit-scales"
import { FormInputMessageType } from "@/elements/form"

export function clearCreateState() {
    return function(dispatch) {
        dispatch(createAction(ActionType.CLEAR_CREATE_STATE))

        return Promise.resolve()
    }
}

export function validateScaleInput(newScale) {
    return function(dispatch) {
        const isValid = newScale && newScale !== HabitScale.NONE && !!Object.keys(HabitScale).map(key => HabitScale[key]).find(scale => scale === newScale)

        return dispatchValidationResult(
            dispatch, isValid ? newScale : HabitScale.NONE, isValid,
            buildData(ActionType.SET_VALID_HABIT_SCALE, `Great! You've set the habit's scale to occur ${newScale.toLowerCase()}.`),
            buildData(ActionType.SET_INVALID_HABIT_SCALE, "You haven't chosen a valid scale for your habit. Choose one of the provided options.")
        )
    }
}

export function validateNameInput(newName) {
    return function (dispatch) {
        const isValid = !!newName && newName.length > 5

        return dispatchValidationResult(
            dispatch, newName, isValid,
            buildData(ActionType.SET_VALID_HABIT_NAME, "Cool. That name is fine."),
            buildData(ActionType.SET_INVALID_HABIT_NAME, "The name isn't long enough yet. It needs at least 6 characters.")
        )
    }
}

export function validateNewHabit() {
    return function (dispatch, getState) {
        const { habits } = getState()
        const values = habits.create
        const invalidValues = Object
            .keys(values)
            .map(key => values[key])
            .filter(state => !state.isValid)
        const result = invalidValues.length > 0 
            ? { isValid: false, invalidValues } 
            : { isValid: true, habit: { name: values.name.value, desc: values.desc.value, scale: values.scale.value } }

        return result.isValid ? Promise.resolve(result.habit) : Promise.reject(result.invalidValues)
    }
}

export function validateDescInput(newDesc) {
    return function (dispatch) {
        return dispatchValidationResult(
            dispatch, newDesc, true,
            buildData(ActionType.SET_VALID_HABIT_DESC, "Cool. That's description is fine.")
        )
    }
}

function buildData(actionType, text) {
    return { actionType, text }
}

function dispatchValidationResult(dispatch, value, isValid, validData, invalidData) {
    const action = createAction(isValid ? validData.actionType : invalidData.actionType, {
        value,
        isValid,
        message: {
            text: isValid ? validData.text: invalidData.text,
            type: isValid ? FormInputMessageType.SUCCESS: FormInputMessageType.ERROR
        }
    })

    dispatch(action)

    return Promise.resolve()
}