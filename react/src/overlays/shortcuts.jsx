import React from "react"
import PropTypes from "prop-types"
import {Button, Overlay} from "@/elements"

const buttonStyles = {
    marginLeft: "10px"
}

const firstButtonStyles = {
    ...buttonStyles,
    marginLeft: 0
}

const Shortcuts = props => ( // TODO: Replace open names with some kind of const.
    <Overlay {...props}>
        <Button type="shortcut" styles={firstButtonStyles} onClick={() => props.onToggle("habits")}>Habits</Button>
        <Button type="shortcut" styles={buttonStyles} onClick={() => props.onToggle("test")}>Test 1</Button>
    </Overlay>
)

Shortcuts.propTypes = {
    onToggle: PropTypes.func.isRequired,
    snap: PropTypes.string
}

export default Shortcuts