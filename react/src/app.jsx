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

const App = ({ habitsWindow, testWindow, onToggleShortcut }) => (
    <AppContainer>
        <WindowFrame routes={routes} />
        <Shortcuts snap="bottom-right" onToggle={name => onToggleShortcut(name)} />
        <HabitsWindow settings={habitsWindow}  />
        <TestWindow settings={testWindow} />
    </AppContainer>
)

const modalSettingsShape = {
    layer: PropTypes.number.isRequired,
    show: PropTypes.bool.isRequired
}

App.propTypes = {
    onToggleShortcut: PropTypes.func.isRequired,
    habitsWindow: PropTypes.shape(modalSettingsShape),
    testWindow: PropTypes.shape(modalSettingsShape)
}

export default App