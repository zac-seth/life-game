import React from "react"
import LayerName from "store/application/layers/layer-names"
import WindowLayer from "elements/window-layer"
import Text from "elements/text"

const DisciplinesWindow = () => (
    <WindowLayer title="Your Disciplines" name={LayerName.DISCIPLINES}>
        <Text>Your Disciplines</Text>
    </WindowLayer>
)

export default DisciplinesWindow