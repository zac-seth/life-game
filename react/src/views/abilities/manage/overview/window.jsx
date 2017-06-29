import React from "react"
import LayerName from "store/application/layers/layer-names"
import WindowLayer from "elements/window-layer"
import Text from "elements/text"

const AbilitiesWindow = () => (
    <WindowLayer title="Your Abilities" name={LayerName.ABILITIES}>
        <Text>Your Abilities</Text>
    </WindowLayer>
)

export default AbilitiesWindow