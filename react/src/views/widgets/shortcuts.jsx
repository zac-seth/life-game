import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { toggleLayerVisibility } from "store/application/layers/actions"
import LayerName from "store/application/layers/layer-names"
import LayerType from "store/application/layers/layer-types"
import Button, { ButtonType } from "elements/button"
import Widget from "elements/widget"

const buttonStyles = {
    marginLeft: "10px"
}

const firstButtonStyles = {
    ...buttonStyles,
    marginLeft: 0
}

let Shortcuts = props => ( // TODO: Replace open names with some kind of const.
    <Widget {...props}>
        <Button type={ButtonType.SHORTCUT} styles={firstButtonStyles} onClick={() => props.onToggle(LayerName.PROFILE)}>Profile</Button>
        <Button type={ButtonType.SHORTCUT} styles={buttonStyles} onClick={() => props.onToggle(LayerName.DISCIPLINES)}>Disciplines</Button>
        <Button type={ButtonType.SHORTCUT} styles={buttonStyles} onClick={() => props.onToggle(LayerName.HABITS)}>Habits</Button>
        <Button type={ButtonType.SHORTCUT} styles={buttonStyles} onClick={() => props.onToggle(LayerName.ABILITIES)}>Abilities</Button>
        <Button type={ButtonType.SHORTCUT} styles={buttonStyles} onClick={() => props.onToggle(LayerName.LESSONS)}>Lessons</Button>
        <Button type={ButtonType.SHORTCUT} styles={buttonStyles} onClick={() => props.onToggle(LayerName.ACHIEVEMENTS)}>Achievements</Button>
    </Widget>
)

Shortcuts.propTypes = {
    onToggle: PropTypes.func.isRequired,
    snap: PropTypes.string
}

const mapDispatchToProps = (dispatch, props) => ({
    onToggle: name => {
        dispatch(toggleLayerVisibility({ type: LayerType.WINDOW, name }))
    }
})

Shortcuts = connect(null, mapDispatchToProps)(Shortcuts)

export default Shortcuts