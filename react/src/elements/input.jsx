import React from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"
import { buildCustomPropEnumValidator, buildValidationMessageShape } from "@/utils/props"
import Text from "./text"

const displayMode = {
    FORM: "FORM",
    INLINE: "INLINE"
}

const InputContainer = styled("div", ({ mode = displayMode.FORM }) => {
    const isForm = mode === displayMode.FORM
    const align = isForm ? "flex-start" : "center"
    const margin = isForm ? { marginBottom: "5px" } : { marginLeft: "5px" }

    return {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: align,
        alignContent: align,
        ...margin
    }
})

const LabelText = styled(Text, {
    flex: "0 0 100px"
})

const ValidationText = styled(Text, {
    flex: "0 0 100px"
})

const Label = ({ value }) => {
    if (!value) {
        return null
    }

    return <LabelText label>{value}</LabelText>
}

const Validation = ({ message }) => {
    if (!message) {
        return null
    }

    return <ValidationText validation={message.type}>{message.text}</ValidationText>
}

const Input = ({ children, label, message, mode = Input.displayMode.FORM }) => {
    const widths = mode === Input.displayMode.FORM ? "100" : undefined

    return (
        <InputContainer mode={mode}>
            <Label value={label} />
            {children}
            <Validation message={message} />
        </InputContainer>
    )
}

Input.Proptypes = {
    label: PropTypes.string,
    mode: buildCustomPropEnumValidator("Input", displayMode, false),
    message: buildValidationMessageShape("Input")
}

Input.displayMode = displayMode

export default Input