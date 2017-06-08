import React from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"
import random from "randomstring"
import { buildEnumValidator } from "@/utils/custom-prop-types"
import InputGroup from "./input-group"
import Text from "./text"

const modes = {
    SINGLE: "SINGLE"
}

const DropDown = styled("select", ({  }) => {

})

DropDown.propTypes = {}

const OptionPicker = props => {
    const inputName = random.generate({
        length: 6,
        charset: "alphanumeric"
    })

    if (props.mode === modes.SINGLE) {
        return (
            <InputGroup>
                <Text label for={inputName}>{props.label}</Text>
                {buildDropDown(props, inputName)}
            </InputGroup>
        )
    }

    return null
}

OptionPicker.mode = modes

OptionPicker.propTypes = {
    label: PropTypes.string,
    mode: buildEnumValidator("OptionPicker", modes),
    /*mode: function(props, propName) {
        const mode = props[propName]

        if (!mode) {
            return Error("No 'mode' prop was supplied to an option picker.")
        } else if (!Object.keys(modes).find(key => modes[key] === mode)) {
            return Error("An incorrect value was supplied to the 'mode' prop. Use one of the values defined by OptionPicker.mode.")
        }

        return null
    },*/
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool
        ])
    })),
    selectedIndex: PropTypes.number,
    onSelectionMade: PropTypes.func
}

function buildDropDown({ options, selectedIndex, onSelectionMade }, inputName) {
    const items = options.map((option, index) => {
        return (
            <option value={option.value} key={index}>
                {option.label ? option.label : option.value}
            </option>
        )
    })

    return (
        <DropDown name={inputName} value={options[selectedIndex].value} onChange={e => onSelectionMade({value: e.target.value})}>
            {items}
        </DropDown>
    )
}

export default OptionPicker