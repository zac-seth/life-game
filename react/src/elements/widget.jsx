import React from "react"
import PropTypes from "prop-types"
import {styled} from "styletron-react"

function snapSide(cb) {
    return side => {
        switch (side) {
            case "top":
            case "bottom":
            case "left":
            case "right":
                cb({[side]: "10px"})
                return;
        }
    }
}

function applySnap(snap) {
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

const Widget = styled("div", ({snap}) => ({
    ...applySnap(snap),
    position: "absolute",
    backgroundColor: "#FFF",
    padding: "10px",
    zIndex: 50
}))

Widget.propTypes = {
    snap: PropTypes.string.isRequired
}

export default Widget