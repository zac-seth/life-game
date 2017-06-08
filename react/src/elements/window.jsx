import React from "react"
import {styled} from "styletron-react"

const WindowContainer = styled("section", {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    transform: "translate(0px, 0px, 0px)",
    background: "rgba(255, 255, 255, 0.8)"
})

const Window = props => (
    <WindowContainer>
        {props.children}
    </WindowContainer>
)

Window.propTypes = {}

export default Window