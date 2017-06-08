import React from "react"
import PropTypes from "prop-types"
import ActionStrip, { ActionGroup } from "@/elements/action-strip"
import Panel from "@/elements/panel"
import WindowLayer from "@/elements/window-layer"
import HabitViews from "@/views/quests/habits"
import { NONE } from "@/store/habits/habit-scales"

const { ListFilter, List } = HabitViews.HabitsList

const HabitsWindow = ({ settings }) => (
    <WindowLayer title="Habits" settings={settings}>
        <ListFilter />
        <Panel>
            <List />
        </Panel>
    </WindowLayer>
)

HabitsWindow.propTypes = {
    settings: PropTypes.shape({
        layer: PropTypes.number.isRequired,
        show: PropTypes.bool.isRequired
    })
}

export default HabitsWindow