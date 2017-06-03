import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { setExpandedHabits, setScaleFilter } from "@/store/application/habits/actions"
import * as scales from "@/store/habits/habit-scales"
import { FilterGroup, OnOffSwitch, OptionPicker } from "@/elements"

const scaleFilterOptions = [
    { label: "Any Time", value: scales.NONE },
    { label: "Daily", value: scales.DAILY },
    { label: "Weekly", value: scales.WEEKLY },
    { label: "Monthly", value: scales.MONTHLY },
    { label: "Yearly", value: scales.YEARLY },
]

let HabitListFilter = ({ scaleFilter, showExpandedDetails, onScaleFilterSelected, onSwitchDetailExpansion }) => {
    const handleSelectionMade = (...evnt) => console.log(evnt)

    const scaleFilterOptionIndex = scaleFilterOptions.indexOf(scaleFilterOptions.find(option => option.value === scaleFilter))

    return (
        <FilterGroup>
            <OptionPicker 
                label="Show habits recurring " 
                options={scaleFilterOptions} 
                mode={OptionPicker.mode.SINGLE} 
                selectedIndex={scaleFilterOptionIndex} 
                onSelectionMade={onScaleFilterSelected} />
            <OnOffSwitch
                label="Show full details"
                isOn={showExpandedDetails}
                onSwitched={onSwitchDetailExpansion} />
        </FilterGroup>
    )
}

HabitListFilter.propTypes = {

}

const mapStateToProps = ({ application }, ownProps) => {
    const habitSettings = application.habits

    return {
        scaleFilter: habitSettings.scaleFilter,
        showExpandedDetails: habitSettings.expanded
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onScaleFilterSelected: scaleFilter => {
        dispatch(setScaleFilter(scaleFilter.value))
    },
    onSwitchDetailExpansion: expanded => {
        dispatch(setExpandedHabits(expanded))
    }
})

HabitListFilter = connect(mapStateToProps, mapDispatchToProps)(HabitListFilter)

HabitListFilter.propTypes = {

}

export default HabitListFilter