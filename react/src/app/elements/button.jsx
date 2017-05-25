import React from "react"
import {styled} from "styletron-react"

function chooseBackground(type) {
    if (!type) {
        return {
            backgroundColor: "#F00",
            ":active": {
                backgroundColor: "#E11"
            }
        }
    }

    switch (type) {
        case "default":
        default:
            return {
                backgroundColor: "#42B983",
                ":active": {
                    backgroundColor: "#7CD0AA"
                }
            }
    }
}

const Button = styled("button", props => ({
    ...chooseBackground(props.type),
    color: "#FFF",
    padding: "5px 10px",
    border: "none",
    borderRadius: 0,
    outline: "none",
    ...(props.styles || {})
}))

export default Button