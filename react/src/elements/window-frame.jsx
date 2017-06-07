import React from "react"
import PropTypes from "prop-types"
import { Switch, Route } from "react-router-dom"
import { styled } from "styletron-react"

const WindowFrameContainer = styled("div", {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    margin: 10,
    zIndex: 2
})

const WindowFrame = ({ routes }) => (
    <WindowFrameContainer>
        <Switch>
            {routes.map((route, i) => <Route key={i} {...route} />)}
        </Switch>
    </WindowFrameContainer>
)

WindowFrame.propTypes = {
    routes: PropTypes.array.isRequired
}

export default WindowFrame