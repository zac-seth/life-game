import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { setExpandedHabits, setScaleFilter } from "@/store/application/habits/actions"
import * as scales from "@/store/habits/habit-scales"
import ActionStrip, { ActionGroup } from "@/elements/action-strip"
import Button, { ButtonType } from "@/elements/button"
import OnOffSwitch from "@/elements/on-off-switch"
import OptionPicker from "@/elements/option-picker"

const scaleFilterOptions = [
    { label: "Any Time", value: scales.NONE },
    { label: "Daily", value: scales.DAILY },
    { label: "Weekly", value: scales.WEEKLY },
    { label: "Monthly", value: scales.MONTHLY },
    { label: "Yearly", value: scales.YEARLY },
]

const buttonStyles = {}

let HabitListFilter = ({ 
    scaleFilter, 
    showExpandedDetails, 
    onOpen, 
    onScaleFilterSelected, 
    onSwitchDetailExpansion 
}) => {
    const handleSelectionMade = (...evnt) => console.log(evnt)

    const scaleFilterOptionIndex = scaleFilterOptions.indexOf(scaleFilterOptions.find(option => option.value === scaleFilter))

    return (
        <ActionStrip>
            <ActionGroup align="left">
                <Button type={ButtonType.DEFAULT} styles={buttonStyles} onClick={onOpen}>Create</Button>
            </ActionGroup>
            <ActionGroup align="right">
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
            </ActionGroup>
        </ActionStrip>
    )
}

HabitListFilter.propTypes = {
    scaleFilter: PropTypes.string.isRequired,
    showExpandedDetails: PropTypes.bool.isRequired,
    
    onOpen: PropTypes.func.isRequired,
    onScaleFilterSelected: PropTypes.func.isRequired,
    onSwitchDetailExpansion: PropTypes.func.isRequired
}

const mapStateToProps = ({ application }, ownProps) => {
    const habitSettings = application.habits

    return {
        scaleFilter: habitSettings.scaleFilter,
        showExpandedDetails: habitSettings.expanded
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onOpen: () => dispatch(toggleLayerVisibility({ type: LayerType.MODAL, name: "createHabit" })),
    onScaleFilterSelected: scaleFilter => dispatch(setScaleFilter(scaleFilter.value)),
    onSwitchDetailExpansion: expanded => dispatch(setExpandedHabits(expanded))
})

HabitListFilter = connect(mapStateToProps, mapDispatchToProps)(HabitListFilter)

HabitListFilter.propTypes = {

}

export default HabitListFilter