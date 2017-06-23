import deepFreeze from "deep-freeze"
import * as HabitScale from "store/habits/habit-scales"
import { FormInputMessageType } from "elements/form"

export function getDefaultCreateState() {
    return {
        name: buildInitialField("Use a name with at least 6 characters"),
        desc: buildInitialField("Explain the habit in detail (optional)."),
        scale: buildInitialField("Select one of the available scales.", HabitScale.NONE)
    }
}

export default deepFreeze(getDefaultCreateState())

function buildInitialField(messageText = "", value = "", messageType = FormInputMessageType.INFO) {
    return {
        value,
        isValid: false,
        message: {
            text: messageText,
            type: messageType
        }
    }
}