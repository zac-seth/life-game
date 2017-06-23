import React from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"
import { buildCustomPropEnumValidator, buildFormInputModelShape } from "utils/props"
import Input from "./input"
import Text from "./text"

const commonStyles = {
    border: "2px solid #999",
    padding: "5px",
    fontSize: "0.8em",
    fontFamily: "Lato, Helvetica, Arial, Sans-Serif",
    lineHeight: "1em",
    outline: "none",

    ":focus": {
        borderColor: "#4271B9"
    }
}

const SingleLineTextBox = styled("input", {
    ...commonStyles,
    height: "24px",
    minWidth: "200px",
    width: "100%"
})

const MultiLineTextBox = styled("textarea", {
    ...commonStyles,
    height: "72px",
    minWidth: "200px",
    width: "100%"
})

const TextBox = ({ children, label, mode, model, multiline, placeholder, onUpdate }) => {
    const handleUpdate = evnt => { 
        onUpdate(evnt.target.value)
    }

    const value = !!model && model.value
    const input = !!multiline
        ? <MultiLineTextBox placeholder={placeholder} onChange={handleUpdate} value={value}></MultiLineTextBox>
        : <SingleLineTextBox type="text" placeholder={placeholder} onChange={handleUpdate} value={value} />

    return (
        <Input label={label} mode={mode} message={!!model && model.message}>
            {input}
        </Input>
    )
}

TextBox.PropTypes = {
    label: PropTypes.string,
    mode: buildCustomPropEnumValidator("TextBox", Input.displayMode, false),
    model: buildFormInputModelShape("TextBox"),
    multiline: PropTypes.bool,
    placeholder: PropTypes.string,

    onUpdate: PropTypes.func.isRequired
}

export default TextBox