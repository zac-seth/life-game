import React from "react"
import {styled} from "styletron-react"

function snapSide(cb) {
    console.log("Snapper built")
    return side => {
        switch (side) {
            case "top":
            case "bottom":
            case "left":
            case "right":
                cb({[side]: 0})
                return;
        }
    }
}

function snap(snap) {
    let result = {}

    if (snap) {
        const sides = snap.split("-")
        const snapper = snapSide(snapped => {
            result = { ...result, ...snapped }
        })

        sides.map(side => side.toLowerCase()).forEach(snapper)
    }

    return result
}

const Overlay = styled("div", props => ({
    ...snap(props.snap),
    position: "absolute",
    backgroundColor: "#FFF",
    padding: "10px"
}))

export default Overlay