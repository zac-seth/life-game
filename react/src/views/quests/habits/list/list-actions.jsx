import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { toggleLayerVisibility } from "store/application/layers/actions"
import LayerType from "store/application/layers/layer-types"
import { 
    specifyExpandedHabits, 
    specifyScaleFilter
} from "store/application/habits/actions"
import * as HabitScale from "store/habits/habit-scales"
import ActionStrip, { ActionGroup } from "elements/action-strip"
import Button, { ButtonType } from "elements/button"
import DropDown from "elements/drop-down"
import Input from "elements/input"
import OnOffSwitch from "elements/on-off-switch"

const scaleFilterOptions = [
    { label: "Any Time", value: HabitScale.NONE },
    { label: "Daily", value: HabitScale.DAILY },
    { label: "Weekly", value: HabitScale.WEEKLY },
    { label: "Monthly", value: HabitScale.MONTHLY },
    { label: "Yearly", value: HabitScale.YEARLY },
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
                    label="Show habits recurring"
                    mode={Input.displayMode.INLINE}
                    options={scaleFilterOptions}
                    selectedIndex={scaleFilterOptionIndex}
                    onSelectionMade={onScaleFilterSelected} />
                <OnOffSwitch
                    label="Show full details"
                    mode={Input.displayMode.INLINE}
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
    onScaleFilterSelected: scaleFilter => dispatch(specifyScaleFilter(scaleFilter.value)),
    onSwitchDetailExpansion: expanded => dispatch(specifyExpandedHabits(expanded))
})

HabitListActions = connect(mapStateToProps, mapDispatchToProps)(HabitListActions)

HabitListActions.propTypes = {

}

export default HabitListActions