import React from "react"
import {styled} from "styletron-react"

const WindowContainer = styled("section", {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    margin: 10
})

const Window = props => (
    <WindowContainer>
        {props.children}
    </WindowContainer>
)

Window.propTypes = {}

export default Window