import React from "react"
import ModalLayer from "@/elements/modal-layer"
import CreateHabit from "./form"

const CreateHabitModal = () => (
    <ModalLayer title="Create Habit" name="createHabit">
        <CreateHabit />
    </ModalLayer>
)

export default CreateHabitModal