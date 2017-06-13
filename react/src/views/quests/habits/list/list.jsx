import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { NONE } from "@/store/habits/habit-scales"
import { setExpandedHabits } from "@/store/application/habits/actions"
import Text from "@/elements/text"
import QuestList from "@/views/quests/quest-list"
import QuestListItem from "@/views/quests/quest-list-item"

let HabitList = ({ expanded, habits, onToggleExpanded }) => (
    <QuestList>
        {habits.map(habit => (
            <QuestListItem key={habit.id}>
                <Text>{habit.name}</Text>
                {expanded && <Text>{habit.desc}</Text>}
                {expanded && <Text>Scale: {habit.scale.toLowerCase()}</Text>}
            </QuestListItem>
        ))}
    </QuestList>
)

HabitList.propTypes = {
    expanded: PropTypes.bool.isRequired,
    habits: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        desc: PropTypes.string,
        scale: PropTypes.string.isRequired
    })).isRequired,
    onToggleExpanded: PropTypes.func.isRequired
}

const mapStateToProps = ({ application, habits }, ownProps) => {
    const scaleFilter = application.habits.scaleFilter

    return {
        habits: scaleFilter === NONE ? habits.list : habits.list.filter(habit => habit.scale === scaleFilter),
        expanded: application.habits.expanded
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onToggleExpanded: expanded => {
        dispatch(setExpandedHabits(expanded))
    }
})

HabitList = connect(mapStateToProps, mapDispatchToProps)(HabitList)

HabitList.propTypes = {}

export default HabitList