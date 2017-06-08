import React from "react"
import PropTypes from "prop-types"
import { ModalLayer, Text } from "@/elements"

const CreateHabitLayer = ({ settings }) => (
    <ModalLayer title="Habits" settings={settings}>
        <Text>Create your habits here</Text>
    </ModalLayer>
)

CreateHabitLayer.propTypes = {
    settings: PropTypes.shape({
        show: PropTypes.bool.isRequired
    }).isRequired
}

export default CreateHabitLayer