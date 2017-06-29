import React from "react"
import LayerName from "store/application/layers/layer-names"
import WindowLayer from "elements/window-layer"
import Text from "elements/text"

const LessonsWindow = () => (
    <WindowLayer title="Your Lessons" name={LayerName.LESSONS}>
        <Text>Your Lessons</Text>
    </WindowLayer>
)

export default LessonsWindow