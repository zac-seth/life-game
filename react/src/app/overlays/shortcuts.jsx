import React from "react"
import {Button, Overlay} from "@/app/elements"

const buttonStyles = {
    marginLeft: "10px"
}

const firstButtonStyles = {
    ...buttonStyles,
    marginLeft: 0
}

const Shortcuts = props => (
    <Overlay {...props}>
        <Button type="shortcut" styles={firstButtonStyles}>Habits</Button>
        <Button type="shortcut" styles={buttonStyles}>Test 1</Button>
        <Button type="shortcut" styles={buttonStyles}>Test 2</Button>
    </Overlay>
)

export default Shortcuts