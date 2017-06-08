import React from "react"
import PropTypes from "prop-types"
import { WindowLayer } from "@/elements"

const TestWindow = ({ settings }) => (
    <WindowLayer title="Test" settings={settings}>
        <h1>Test Window</h1>
    </WindowLayer>
)

TestWindow.propTypes = {
    settings: PropTypes.shape({
        layer: PropTypes.number.isRequired,
        show: PropTypes.bool.isRequired
    })
}

export default TestWindow