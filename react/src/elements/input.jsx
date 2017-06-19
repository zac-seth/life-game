import React from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"
import { buildCustomPropEnumValidator, buildValidationMessageShape } from "@/utils/props"
import { Types as TextTypes } from "./text"

const displayMode = {
    FORM: "FORM",
    INLINE: "INLINE"
}

const InputGroup = styled("div", ({ mode = displayMode.FORM }) => mode === displayMode.FORM
    ? {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignContent: "flex-start",
        marginBottom: "10px"
    }
    : {
        display: "inline-block",
        marginLeft: "10px"
    }
)

const InputField = styled("div", ({ mode = displayMode.FORM }) => mode === displayMode.FORM ? { flex: "auto" } : { display: "inline-block" })

const LabelText = styled(TextTypes.Label, ({ mode = displayMode.FORM }) => mode === displayMode.FORM 
    ? {
        flex: "0 0 120px",
        marginRight: "10px",
        lineHeight: "24px"
    }
    : {
        display: "inline-block"
    }
)

const ValidationText = styled(TextTypes.Validation, {
    flex: "0 0 120px",
    marginLeft: "10px",
    textAlign: "left"
})

const Label = ({ value }) => {
    if (!value) {
        return null
    }

    return <LabelText>{value}</LabelText>
}

const Validation = ({ message }) => {
    if (!message) {
        return null
    }

    return <ValidationText type={message.type}>{message.text}</ValidationText>
}

const Input = ({ children, label, message, mode = Input.displayMode.FORM }) => {
    const widths = mode === Input.displayMode.FORM ? "100" : undefined

    return (
        <InputGroup mode={mode}>
            <Label value={label} mode={mode} />
            <InputField mode={mode}>{children}</InputField>
            <Validation message={message} />
        </InputGroup>
    )
}

Input.Proptypes = {
    label: PropTypes.string,
    mode: buildCustomPropEnumValidator("Input", displayMode, false),
    message: buildValidationMessageShape("Input")
}

Input.displayMode = displayMode

export default Input