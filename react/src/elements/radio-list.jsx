import React from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"
import InputGroup from "@/elements/input-group"
import Text from "@/elements/text"

const RadioListContainer = styled("ul", {
    
})

const RadioItem = styled("li", {
    padding: "5px",
    ":hover": {
        backgroundColor: "#4271B9",
        cursor: "pointer"
    }
})

const RadioIndicatorOuter = styled("span", {
    display: "block",
    position: "relative",
    width: "24px",
    height: "24px",
    borderRadius: "12px",
    border: "2px solidd #999"
})

const RadioIndicatorInner = styled("span", ({ checked }) => ({
    display: "block",
    position: "absolute",
    top: "4px",
    left: "4px",
    width: "16px",
    height: "16px",
    backgroundColor: checked ? "#4271B9" : "transparent",

    ":hover": {
        backgroundColor: checked ? "#4271B9" : "#DDD"
    }
}))

const RadioIndicator = ({ checked }) => {
    return (
        <RadioIndicatorOuter>
            <RadioIndicatorInner checked={checked} />
        </RadioIndicatorOuter>
    )
}

const RadioList = ({ label, options, selectedIndex = -1, onSelectionMade }) => (
    <InputGroup>
        <Text label>{label}</Text>
        <RadioListContainer>
            {options.map((option, index) =>
                <RadioItem key={option.value} onClick={() => onSelectionMade(option)}>
                    <RadioIndicator checked={index === selectedIndex} />
                    <Text input>{option.label ? option.label : option.value}</Text>
                </RadioItem>)
            }
        </RadioListContainer>
    </InputGroup>
)

RadioList.propTypes = {
    label: PropTypes.string,
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

export default RadioList