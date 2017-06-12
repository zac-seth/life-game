import React from "react"
import PropTypes from "prop-types"
import {styled} from "styletron-react"

const headerFont = "'Exo 2', Helvetica, Arial, Sans-Serif"
const contentFont = "Lato, Helvetica, Arial, Sans-Serif"

const HeaderText = styled("h1", props => ({
    fontFamily: headerFont,
    fontSize: "2em"
}))

const LabelText = styled("label", props => ({
    fontFamily: contentFont,
    fontSize: "0.8em"
}))

const ParagraphText = styled("p", props => ({
    fontFamily: contentFont,
    fontSize: "1.2em"
}))

const InputText = styled("span", {
    fontFamily: contentFont,
    fontSize: "0.8em"
})

function chooseElementType(props) {
    if (props.header) {
        return <HeaderText>{props.children}</HeaderText>
    } else if (props.label) {
        return <LabelText for={props.for}>{props.children}</LabelText>
    } else if (props.input) {
        return <InputText>{props.children}</InputText>
    }

    return <ParagraphText>{props.children}</ParagraphText>
}

const Text = props => {
    if (!props.children || !props.children[0]) {
        return null
    }

    return chooseElementType(props)
}

Text.propTypes = {
    header: PropTypes.bool,
    for: PropTypes.string,
    label: PropTypes.bool
}

export default Text