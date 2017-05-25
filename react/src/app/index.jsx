import React from "react"
import {styled} from "styletron-react"
import {WindowFrame} from "@/app/elements"
import routes from "@/app/routes"
import Shortcuts from "@/app/overlays/shortcuts"

const AppContainer = styled("div", {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "#2B2B2B"
})

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        // setup initial state here.
    }

    render() {
        return (
            <AppContainer>
                <WindowFrame routes={routes} />
                <Shortcuts snap="bottom-right" />
            </AppContainer>
        )
    }
}