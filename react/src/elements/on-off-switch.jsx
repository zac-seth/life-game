import React from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"
import InputGroup from "./input-group"
import Text from "./text"

const SwitchContainer = styled("div", {
    position: "relative",
    display: "inline-block",
    width: "48px",
    height: "24px",
    border: "2px solid #999",
    padding: "2px",
    marginLeft: "5px",
    backgroundColor: "#FFF",
    cursor: "pointer"
})

const SwitchBody = styled("div", {
    backgroundColor: "#DDD",
    height: "16px"
})

const Switch = styled("div", ({ isOn }) => {
    const offset = "-2px"
    const pos = isOn 
        ? { backgroundColor: "#4271B9", left: offset, marginLeft: "24px" } 
        : { backgroundColor: "#999", left: offset }
    
    return {
        ...pos,
        position: "absolute",
        width: "24px",
        height: "24px",
        top: offset,
        transition: "all 0.1s ease-in 0s"
    }
})

const OnOffSwitch = ({ label, isOn, onSwitched }) => (
    <InputGroup>
        <Text label for="blah">{label}</Text>
        <SwitchContainer onClick={() => onSwitched(!isOn)}>
            <SwitchBody />
            <Switch isOn={isOn} />
        </SwitchContainer>
    </InputGroup>
)

OnOffSwitch.PropTypes = {
    label: PropTypes.string.isRequired,
    isOn: PropTypes.bool.isRequired,
    onSwitched: PropTypes.func.isRequired
}

export default OnOffSwitch