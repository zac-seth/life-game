import React from "react"
import PropTypes from "prop-types"
import { ModalWindow } from "@/elements"

const TestWindow = ({ settings }) => (
    <ModalWindow title="Test" settings={settings}>
        <h1>Test Window</h1>
    </ModalWindow>
)

TestWindow.propTypes = {
    settings: PropTypes.shape({
        layer: PropTypes.number.isRequired,
        show: PropTypes.bool.isRequired
    })
}

export default TestWindow