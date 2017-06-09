import React from "react"
import { NONE } from "@/store/habits/habit-scales"
import Panel from "@/elements/panel"
import WindowLayer from "@/elements/window-layer"
import HabitViews from "@/views/quests/habits"

const { List, ListFilter } = HabitViews.HabitsList

const HabitsWindow = () => (
    <WindowLayer title="Habits" name="habits">
        <ListFilter />
        <Panel>
            <List />
        </Panel>
    </WindowLayer>
)

export default HabitsWindow