import React from "react"
import { styled } from "styletron-react"

const ModalWindow = styled("div", {
    backgroundColor: "#FFF"
})

export default ({ show }) => (
    <ModalWindow>
        {show && <h1>Test Window</h1>}
    </ModalWindow>
)