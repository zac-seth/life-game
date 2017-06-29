import React from "react"
import LayerName from "store/application/layers/layer-names"
import { NONE } from "store/habits/habit-scales"
import Panel from "elements/panel"
import WindowLayer from "elements/window-layer"
import List from "./list"
import ListActions from "./list-actions"

const HabitsWindow = () => (
    <WindowLayer title="Habits" name={LayerName.HABITS}>
        <ListActions />
        <Panel>
            <List />
        </Panel>
    </WindowLayer>
)

export default HabitsWindow