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
                cb({[side]: 0})
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

const Overlay = styled("div", ({snap}) => ({
    ...applySnap(snap),
    position: "absolute",
    backgroundColor: "#FFF",
    padding: "10px"
}))

Overlay.propTypes = {
    snap: PropTypes.string.isRequired
}

export default Overlay