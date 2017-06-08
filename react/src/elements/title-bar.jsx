import React from "react"
import { styled } from "styletron-react"

const TitleBar = styled("header", {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "#4271B9",
    borderBottom: "1px solid #114188",
    height: "64px",
    padding: "10px",
    color: "#FFF"
})

TitleBar.propTypes = {
    
}

export default TitleBar