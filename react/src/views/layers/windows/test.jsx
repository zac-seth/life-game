import React from "react"
import Text from "@/elements/text"
import WindowLayer from "@/elements/window-layer"

const TestWindow = () => (
    <WindowLayer title="Test" name="test">
        <Text>Test Window</Text>
    </WindowLayer>
)

export default TestWindow