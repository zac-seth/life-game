import React from "react"
import PropTypes from "prop-types"
import random from "randomstring"
import CheckBox from "./check-box"
import InputGroup from "./input-group"
import Text from "./text"

const OnOffSwitch = ({ label, isOn, onSwitched }) => {
    const inputName = random.generate({
        length: 6,
        charset: "alphanumeric"
    })

    return (
        <InputGroup>
            <Text label for={inputName}>{label}</Text>
            <CheckBox checked={isOn} onChange={e => onSwitched(!isOn)} />
        </InputGroup>
    )
}

OnOffSwitch.PropTypes = {
    label: PropTypes.string.isRequired,
    isOn: PropTypes.bool.isRequired,
    onSwitched: PropTypes.func.isRequired
}

export default OnOffSwitch