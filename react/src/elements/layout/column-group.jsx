import React from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"

const ColumnGroup = styled("div", ({ cols }) => ({
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, [col] 1fr)`,
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden"
}))

ColumnGroup.propTypes = {
    cols: PropTypes.number.isRequired
}

export default ColumnGroup