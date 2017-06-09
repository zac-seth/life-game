import React from "react"
import { NONE } from "@/store/habits/habit-scales"
import Panel from "@/elements/panel"
import WindowLayer from "@/elements/window-layer"
import List from "@/views/quests/habits/list"
import ListActions from "@/views/quests/habits/list-actions"

const HabitsWindow = () => (
    <WindowLayer title="Habits" name="habits">
        <ListActions />
        <Panel>
            <List />
        </Panel>
    </WindowLayer>
)

export default HabitsWindow