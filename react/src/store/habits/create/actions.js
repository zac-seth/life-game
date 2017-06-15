import { createAction } from "@/utils/store"
import ActionType from "@/store/action-type"
import * as HabitScale from "@/store/habits/habit-scales"
import { FormInputMessageType } from "@/elements/form"

export function validateScaleInput(newScale) {
    return function(dispatch) {
        const isValid = newScale && newScale !== HabitScale.NONE && !!Object.keys(HabitScale).map(key => HabitScale[key]).find(scale => scale === newScale)

        return dispatchValidationResult(
            dispatch, isValid ? newScale : HabitScale.NONE, isValid,
            buildData(ActionType.SET_VALID_HABIT_SCALE, `Great! You've set the habit's scale to occur ${newScale.toLowerCase()}.`),
            buildData(ActionType.SET_INVALID_HABIT_SCALE, "You supplied an invalid habit scale. Choose one of the provided options.")
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