import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as HabitScale from "store/habits/habit-scales"
import {
    clearCreateState,
    validateDescInput,
    validateNameInput,
    validateNewHabit,
    validateScaleInput
} from "store/habits/create/actions"
import { createHabit } from "store/habits/list/actions"
import { buildCustomPropEnumValidator, buildFormInputModelShape } from "utils/props"
import Button, { ButtonType } from "elements/button"
import Form from "elements/form"
import RadioList from "elements/radio-list"
import Text from "elements/text"
import TextBox from "elements/text-box"

const { ButtonStrip } = Form

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
            label="Recurrence"
            options={scaleFilterOptions}
            model={scale}
            direction={RadioList.direction.VERTICAL}
            onSelectionMade={option => onScaleChanged(option.value)} />
        <Form.ButtonStrip>
            <Button styles={Form.ButtonStrip.buttonStyles} type={ButtonType.NEGATIVE} onClick={() => onCancel()}>Cancel</Button>
            <Button styles={Form.ButtonStrip.buttonStyles} type={ButtonType.AFFIRMATIVE} onClick={() => onSave()}>Save</Button>
        </Form.ButtonStrip>
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

async function closeForm(dispatch, props) {
    await dispatch(clearCreateState())
    
    props.onClose()
}

CreateHabitForm = connect(
    ({ habits }, ownProps) => ({ 
        ...habits.create 
    }), 
    (dispatch, ownProps) => ({
        onCancel: async () => {
            // Should display a dialog for confirmation here, but that will be done later.
            await closeForm(dispatch, ownProps)()
        },
        onDescChanged: async desc => {
            await dispatch(validateDescInput(desc))
        },
        onNameChanged: async name => {
            await dispatch(validateNameInput(name))
        },
        onSave: async () => {
            try {
                const habit = await dispatch(validateNewHabit())
                const result = await dispatch(createHabit(habit))

                await closeForm(dispatch, ownProps)
            } catch (invalidValues) {
                console.log("Validation failed, set the appropriate state on the invalid values: ", invalidValues)
            }
        },
        onScaleChanged: async scale => {
            await dispatch(validateScaleInput(scale))
        }
    })
)(CreateHabitForm)

CreateHabitForm.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default CreateHabitForm