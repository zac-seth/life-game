import React from "react"
import {styled} from "styletron-react"

const WindowContainer = styled("section", {
    position: "absolute",
    top: 0,
    left: "100px",
    bottom: 0,
    right: "100px",
    opacity: 0.7,
    backgroundColor: "#CCC" 
})

const Window = props => (
    <WindowContainer>
        {props.children}
    </WindowContainer>
)

Window.propTypes = {}

export default Window