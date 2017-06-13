import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as HabitScale from "@/store/habits/habit-scales"
import ActionStrip, { ActionGroup } from "@/elements/action-strip"
import Button, { ButtonType } from "@/elements/button"
import Form from "@/elements/form"
import RadioList from "@/elements/radio-list"
import Text from "@/elements/text"

const scaleFilterOptions = [
    { label: "Daily", value: HabitScale.DAILY },
    { label: "Weekly", value: HabitScale.WEEKLY },
    { label: "Monthly", value: HabitScale.MONTHLY },
    { label: "Yearly", value: HabitScale.YEARLY },
]

let CreateHabitForm = ({ onCancel, onSave }) => {
    let model = {
        name: "",
        desc: "",
        scale: HabitScale.NONE
    }

    const setModel = newModel => {
        model = {
            ...model,
            ...newModel
        }
    }

    return (
        <Form>
            <Text>Create your habit here</Text>
            {/*<TextBox label="Name" onUpdate={value => setModel({ name: value })} />
            <TextBox multiline label="Description" onUpdate={value => setModel({ desc: value })} />*/}
            <RadioList label="Recurs" options={scaleFilterOptions} onSelectionMade={value => setModel({ scale: value })} />
            <ActionStrip>
                <ActionGroup align="right">
                    <Button type={ButtonType.NEGATIVE} onClick={() => onCancel()}>Cancel</Button>
                    <Button type={ButtonType.AFFIRMATIVE} onClick={() => onSave(model)}>Save</Button>
                </ActionGroup>
            </ActionStrip>
        </Form>
    )
}

function closeWindow() {
    console.log("onCancel called")
}

function saveData(data) {
    console.log("onSave called: ", data)

    return Promise.resolve()
}

CreateHabitForm.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCancel: () => {
        closeWindow()
    },
    onSave: habit => {
        saveData(habit)
            .then(closeWindow)
    }
})

CreateHabitForm = connect(null, mapDispatchToProps)(CreateHabitForm)

export default CreateHabitForm