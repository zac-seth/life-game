import React from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"

const GalleryGrid = styled("ul", ({ cols }) => ({
    display: "grid",
    gridColumnGap: "10px",
    gridRowGap: "10px",
    gridTemplateColumns: `repeat(${cols}, [col] ${cols}vmin) 1%`,
    gridTemplateRows: `repeat(auto-fit, [row] ${cols}vmin) 1em`,
    margin: "10px"
}))

GalleryGrid.propTypes = {
    cols: PropTypes.number.isRequired
}

export default GalleryGrid