import React from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"

const Column = styled("div", ({ span }) => ({
    gridColumn: `span ${span}`,
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden"
}))

Column.propTypes = {
    span: PropTypes.number.isRequired
}

export default Column