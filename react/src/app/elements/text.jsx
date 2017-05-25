import React from "react"
import {styled} from "styletron-react"

const Header = styled("h1", props => ({
    fontSize: "2em"
}))

const Paragraph = styled("p", props => ({
    fontSize: "1.2em"
}))

function chooseElementType(props) {
    if (props.header) {
        return Header
    }

    return Paragraph
}

const Text = props => {
    const Element = chooseElementType(props)

    return <Element {...props}>{props.children}</Element>
}

export default Text