import React from "react"
import PropTypes from "prop-types"
import { ModalWindow } from "@/elements"

const HabitsWindow = ({ settings }) => (
    <ModalWindow title="Habits" settings={settings}>
        <h1>Habits Window</h1>
    </ModalWindow>
)

HabitsWindow.propTypes = {
    settings: PropTypes.shape({
        layer: PropTypes.number.isRequired,
        show: PropTypes.bool.isRequired
    })
}

export default HabitsWindow