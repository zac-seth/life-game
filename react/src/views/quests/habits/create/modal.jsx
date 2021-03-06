import React from "react"
import LayerName from "store/application/layers/layer-names"
import ModalLayer from "elements/modal-layer"
import CreateHabit from "./form"

const CreateHabitModal = () => {
    // This feels wrong - but seems much cleaner than setting up state in order to tell the child modal component that it should close (which would then need to be reset).
    let onClose
    const handleClose = (cb) => {
        onClose = cb
    }

    return (
        <ModalLayer title="Create Habit" name={LayerName.CREATE_HABIT} handleClose={(cb) => {onClose = cb}}>
            <CreateHabit onClose={() => onClose()} />
        </ModalLayer>
    )
}

export default CreateHabitModal