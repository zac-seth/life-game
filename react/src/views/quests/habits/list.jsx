import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { NONE } from "@/store/habits/habit-scales"
import { setExpandedHabits } from "@/store/application/habits/actions"
import { QuestList } from "@/elements"
import HabitItem from "./item"

let HabitList = ({ expanded, habits, onToggleExpanded }) => {
    const items = habits.map(habit => <HabitItem expanded={expanded} habit={habit} key={habit.id} />)
    
    return (
        <QuestList>
            {items}
        </QuestList>
    )
}

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

const mapStateToProps = (state, ownProps) => ({
    habits: ownProps.scale === NONE ? state.habits : state.habits.filter(habit => habit.scale === ownProps.scale),
    expanded: state.application.habits.expanded
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onToggleExpanded: expanded => {
        dispatch(setExpandedHabits(expanded))
    }
})

HabitList = connect(mapStateToProps, mapDispatchToProps)(HabitList)

HabitList.propTypes = {
    scale: PropTypes.string.isRequired
}

export default HabitList