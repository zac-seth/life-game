import React from "react"
import PropTypes from "prop-types"
import {styled} from "styletron-react"
import { FormInputMessageType } from "./form"

const headerFont = "'Exo 2', Helvetica, Arial, Sans-Serif"
const contentFont = "Lato, Helvetica, Arial, Sans-Serif"

const HeaderText = styled("h1", props => ({
    fontFamily: headerFont,
    fontSize: "2em"
}))

const InputText = styled("span", {
    fontFamily: contentFont,
    fontSize: "0.8em"
})

const LabelText = styled("label", props => {
    return {
        display: "inline-block",
        fontFamily: contentFont,
        fontSize: "0.8em",
        width: props.width ? `${props.width}px` : "auto",
        textAlign: "right"
    }
})

const ParagraphText = styled("p", props => ({
    fontFamily: contentFont,
    fontSize: "1em",
    marginBottom: "0.5em"
}))

const ValidationText = styled("span", ({ type }) => ({
    fontFamily: contentFont,
    fontSize: "0.8em",
    color: chooseValidationColor(type)
}))

function chooseValidationColor(type) {
    switch (type) {
        case FormInputMessageType.SUCCESS:
            return "#42B983"
        case FormInputMessageType.ERROR:
            return "#EC6C55"
        case FormInputMessageType.INFO:
        default:
            return "#999"
    }
}

const Text = props => {
    if (!props.children || !props.children[0]) {
        return null
    }

    if (props.header) {
        return <HeaderText>{props.children}</HeaderText>
    } else if (props.label) {
        return <LabelText for={props.for} width={props.width}>{props.children}</LabelText>
    } else if (props.input) {
        return <InputText>{props.children}</InputText>
    } else if (props.validation) {
        return <ValidationText type={props.validation}>{props.children}</ValidationText>
    }

    return <ParagraphText>{props.children}</ParagraphText>
}

Text.propTypes = {
    header: PropTypes.bool,
    for: PropTypes.string,
    input: PropTypes.bool,
    label: PropTypes.bool,
    validation: PropTypes.string,
    width: PropTypes.string
}

export const Types = {
    Header: HeaderText,
    Input: InputText,
    Label: LabelText,
    Paragraph: ParagraphText,
    Validation: ValidationText
}

export default Text