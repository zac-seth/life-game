import React from "react"
import PropTypes from "prop-types"
import { ModalWindow } from "@/elements"
import HabitList from "@/views/quests/habits/list"
import ListFilter from "@/views/quests/habits/list-filter"
import { NONE } from "@/store/habits/habit-scales"

const HabitsWindow = ({ settings }) => (
    <ModalWindow title="Habits" settings={settings}>
        <ListFilter />
        <HabitList scale={NONE} />
    </ModalWindow>
)

HabitsWindow.propTypes = {
    settings: PropTypes.shape({
        layer: PropTypes.number.isRequired,
        show: PropTypes.bool.isRequired
    })
}

export default HabitsWindow