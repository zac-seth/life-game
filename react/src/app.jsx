import React from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"
import routes from "@/routes"
import { WindowFrame } from "@/elements"
import Shortcuts from "@/overlays/shortcuts"
import { HabitsWindow, TestWindow } from "@/layers/windows"

const AppContainer = styled("div", {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "#2B2B2B"
})

const App = ({ onToggleShortcut, showHabits, showTest }) => (
    <AppContainer>
        <WindowFrame routes={routes} />
        <Shortcuts snap="bottom-right" onToggle={name => onToggleShortcut(name)} />
        <HabitsWindow show={showHabits} />
        <TestWindow show={showTest} />
    </AppContainer>
)

App.propTypes = {
    onToggleShortcut: PropTypes.func.isRequired,
    showHabits: PropTypes.bool.isRequired,
    showTest: PropTypes.bool.isRequired
}

export default App