import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as scales from "@/store/habits/habit-scales"
import { FilterGroup, OptionPicker } from "@/elements"

const scaleOptions = [
    { label: "No scale", value: scales.NONE },
    { label: "Daily", value: scales.DAILY },
    { label: "Weekly", value: scales.WEEKLY },
    { label: "Monthly", value: scales.MONTHLY },
    { label: "Yearly", value: scales.YEARLY },
]

let HabitListFilter = ({ }) => {
    const handleSelectionMade = console.log

    return (
        <FilterGroup>
            <OptionPicker label="Frequency" options={scaleOptions} mode={OptionPicker.mode.SINGLE} selectedIndex={0} onSelectionMade={handleSelectionMade} />
        </FilterGroup>
    )
}

HabitListFilter.propTypes = {

}

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

HabitListFilter = connect(mapStateToProps, mapDispatchToProps)(HabitListFilter)

HabitListFilter.propTypes = {

}

export default HabitListFilter