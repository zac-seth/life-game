import React from "react"
import { NONE } from "store/habits/habit-scales"
import LayerName from "store/application/layers/layer-names"
import ColumnGroup from "elements/layout/column-group"
import Column from "elements/layout/column"
import WindowLayer from "elements/window-layer"
import AchievementList from "./list"
import AchievementDetail from "./detail"

const AchievementsWindow = () => (
    <WindowLayer title="Your Achievements" name={LayerName.ACHIEVEMENTS}>
        <ColumnGroup cols={4}>
            <Column span={3}><AchievementList /></Column>
            <Column span={1}><AchievementDetail /></Column>
        </ColumnGroup>
    </WindowLayer>
)

export default AchievementsWindow