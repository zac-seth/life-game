import React from "react"
import { NONE } from "store/habits/habit-scales"
import Panel from "elements/panel"
import WindowLayer from "elements/window-layer"
import AchievementList from "./list"
import AchievementDetail from "./detail"

const AchievementsWindow = () => (
    <WindowLayer title="Your Achievements" name="achievements">
        <Panel>
            <AchievementList />
            <AchievementDetail />
        </Panel>
    </WindowLayer>
)

export default AchievementsWindow