import React from "react"
import PropTypes from "prop-types"
import {styled} from "styletron-react"

const Header = styled("h1", props => ({
    fontFamily: "'Exo 2', Helvetica, Arial, Sans-Serif",
    fontSize: "2em"
}))

const Label = styled("label", props => ({
    fontFamily: "Lato, Helvetica, Arial, Sans-Serif",
    fontSize: "0.8em"
}))

const Paragraph = styled("p", props => ({
    fontFamily: "Lato, Helvetica, Arial, Sans-Serif",
    fontSize: "1.2em"
}))

function chooseElementType(props) {
    if (props.header) {
        return <Header>{props.children}</Header>
    } if (props.label) {
        if (!props.for) {
            console.warn("A label text component was created without a target.")
        }

        return <Label for={props.for}>{props.children}</Label>
    }

    return <Paragraph>{props.children}</Paragraph>
}

const Text = props => {
    if (!props.children || !props.children[0]) {
        return null
    }

    return chooseElementType(props)
}

Text.propTypes = {
    header: PropTypes.bool,
    label: PropTypes.bool,
    for: PropTypes.string
}

export default Text