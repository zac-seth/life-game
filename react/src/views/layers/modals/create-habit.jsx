import React from "react"
import ModalLayer from "@/elements/modal-layer"
import CreateHabit from "@/views/quests/habits/create"

const CreateHabitLayer = () => (
    <ModalLayer title="Create Habit" name="createHabit">
        <CreateHabit />
    </ModalLayer>
)

export default CreateHabitLayer