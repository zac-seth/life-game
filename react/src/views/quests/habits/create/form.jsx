import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as HabitScale from "@/store/habits/habit-scales"
import {
    validateDescInput,
    validateNameInput,
    validateScaleInput
} from "@/store/habits/create/actions"
import { buildCustomPropEnumValidator, buildFormInputModelShape } from "@/utils/props"
import ActionStrip, { ActionGroup } from "@/elements/action-strip"
import Button, { ButtonType } from "@/elements/button"
import Form from "@/elements/form"
import RadioList from "@/elements/radio-list"
import Text from "@/elements/text"
import TextBox from "@/elements/text-box"

const scaleFilterOptions = [
    { label: "Daily", value: HabitScale.DAILY },
    { label: "Weekly", value: HabitScale.WEEKLY },
    { label: "Monthly", value: HabitScale.MONTHLY },
    { label: "Yearly", value: HabitScale.YEARLY },
]

let CreateHabitForm = ({ name, desc, scale, onNameChanged, onDescChanged, onScaleChanged, onCancel, onSave }) => (
    <Form>
        <Text>Create your habit here</Text>
        <TextBox label="Name" model={name} onUpdate={value => onNameChanged(value)} />
        <TextBox multiline label="Description" model={desc} onUpdate={value => onDescChanged(value)} />
        <RadioList 
            label="Recurs"
            options={scaleFilterOptions}
            model={scale}
            direction={RadioList.direction.VERTICAL}
            onSelectionMade={option => onScaleChanged(option.value)} />
        <ActionStrip>
            <ActionGroup align="right">
                <Button type={ButtonType.NEGATIVE} onClick={() => onCancel()}>Cancel</Button>
                <Button type={ButtonType.AFFIRMATIVE} onClick={() => onSave()}>Save</Button>
            </ActionGroup>
        </ActionStrip>
    </Form>
)

function closeWindow() {
    console.log("onCancel called")
}

function saveData(data) {
    console.log("onSave called: ", data)

    return Promise.resolve()
}

CreateHabitForm.propTypes = {
    name: buildFormInputModelShape().isRequired,
    desc: buildFormInputModelShape().isRequired,
    scale: buildFormInputModelShape().isRequired,

    onCancel: PropTypes.func.isRequired,
    onDescChanged: PropTypes.func.isRequired,
    onNameChanged: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onScaleChanged: PropTypes.func.isRequired
}

CreateHabitForm = connect(
    ({ habits }, ownProps) => ({ 
        ...habits.create 
    }), 
    (dispatch, ownProps) => ({
        onCancel: () => {
            console.log(`CreateHabitForm.onCancel() called`)
        },
        onDescChanged: desc => {
            console.log(`CreateHabitForm.onDescChanged() called: ${desc}`)
            dispatch(validateDescInput(desc))
        },
        onNameChanged: name => {
            console.log(`CreateHabitForm.onNameChanged() called: ${name}`)
            dispatch(validateNameInput(name))
        },
        onSave: () => {
            console.log(`CreateHabitForm.onSave() called`)
        },
        onScaleChanged: scale => {
            dispatch(validateScaleInput(scale))
        }
    })
)(CreateHabitForm)

export default CreateHabitForm