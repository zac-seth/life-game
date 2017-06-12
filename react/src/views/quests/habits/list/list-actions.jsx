import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { toggleLayerVisibility } from "@/store/application/layers/actions"
import LayerType from "@/store/application/layers/layer-types"
import { setExpandedHabits, setScaleFilter } from "@/store/application/habits/actions"
import * as scales from "@/store/habits/habit-scales"
import ActionStrip, { ActionGroup } from "@/elements/action-strip"
import Button, { ButtonType } from "@/elements/button"
import DropDown from "@/elements/drop-down"
import OnOffSwitch from "@/elements/on-off-switch"

const scaleFilterOptions = [
    { label: "Any Time", value: scales.NONE },
    { label: "Daily", value: scales.DAILY },
    { label: "Weekly", value: scales.WEEKLY },
    { label: "Monthly", value: scales.MONTHLY },
    { label: "Yearly", value: scales.YEARLY },
]

const buttonStyles = {}

let HabitListActions = ({ 
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
                <DropDown
                    label="Show habits recurring "
                    options={scaleFilterOptions}
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

HabitListActions.propTypes = {
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

HabitListActions = connect(mapStateToProps, mapDispatchToProps)(HabitListActions)

HabitListActions.propTypes = {

}

export default HabitListActions