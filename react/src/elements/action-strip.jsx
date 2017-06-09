import React from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"

const ActionStrip = styled("div", {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "stretch",
    height: "64px",
    padding: "10px",
    borderBottom: "1px solid #DDD"
})

ActionStrip.PropTypes = {}

const ActionGroupComponent = styled("div", ({ align }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    margin: "5px"
}))

ActionGroupComponent.propTypes = {
    align: PropTypes.string
}

export const ActionGroup = ActionGroupComponent

export default ActionStrip