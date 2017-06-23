import React from "react"
import { Switch, Route } from "react-router-dom"
import { styled } from "styletron-react"
import routes from "../routes"

const PageFrameContainer = styled("div", {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    margin: 10,
    zIndex: 2
})

const PageFrame = () => (
    <PageFrameContainer>
        <Switch>
            {routes.map((route, i) => <Route key={i} {...route} />)}
        </Switch>
    </PageFrameContainer>
)

export default PageFrame