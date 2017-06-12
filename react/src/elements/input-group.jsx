import React from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"

const InputGroup = styled("div", {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    alignContent: "center",
    marginLeft: "5px"
})

InputGroup.propTypes = {}

export default InputGroup