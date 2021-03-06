import React from "react"
import LayerName from "store/application/layers/layer-names"
import { NONE } from "store/habits/habit-scales"
import Panel from "elements/panel"
import WindowLayer from "elements/window-layer"

const ProfileWindow = () => (
    <WindowLayer title="Your Profile" name={LayerName.PROFILE}>

        <Panel>

        </Panel>
    </WindowLayer>
)

export default ProfileWindow