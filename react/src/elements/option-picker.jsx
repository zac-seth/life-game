import React from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"
import Text from "./text"

const modes = {
    SINGLE: "SINGLE"
}

const DropDown = styled("select", ({}) => {

})

DropDown.propTypes = {

}

const OptionPicker = props => {
    if (props.mode === modes.SINGLE) {
        return buildDropDown(props)
    }

    return null
}

OptionPicker.mode = modes

OptionPicker.propTypes = {
    label: PropTypes.string,
    mode: function(props, propName) {
        const mode = props[propName]

        if (!mode) {
            return Error("No 'mode' prop was supplied to an option picker.")
        } else if (!Object.keys(modes).find(key => modes[key] === mode)) {
            return Error("An incorrect value was supplied to the 'mode' prop. Use one of the values defined by OptionPicker.mode.")
        }

        return null
    },
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

function buildDropDown({ label, options, selectedIndex, onSelectionMade }) {
    const items = options.map((option, index) => {
        return (
            <option value={option.value} key={index}>
                {option.label ? option.label : option.value}
            </option>
        )
    })

    return (
        <DropDown value={options[selectedIndex].value} onChange={onSelectionMade}>
            {items}
        </DropDown>
    )
}

export default OptionPicker