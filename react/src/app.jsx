import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { styled } from "styletron-react"
import { toggleLayerVisibility } from "@/store/application/layers/actions"
import layerTypes from "@/store/application/layers/layer-types"
import routes from "@/routes"
import Wallpaper from "@/wallpaper"
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

let App = ({ habitsWindow, testWindow, onToggleShortcut }) => (
    <AppContainer>
        <Wallpaper />
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

const mapStateToProps = (state, props) => ({
    habitsWindow: mapWindowSettings(state, "habits"),
    testWindow: mapWindowSettings(state, "test")
})

const mapDispatchToProps = (dispatch, props) => ({
    onToggleShortcut: name => {
        dispatch(toggleLayerVisibility({ type: layerTypes.WINDOW, name }))
    }
})

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App

function mapWindowSettings(state, name) {
    const { layers } = state.application
    const show = layers.types.window[name]
    const layer = layers.stack.find(layer => layer.type === layerTypes.WINDOW && layer.name === name)

    return {
        show: show,
        layer: layer ? layers.stack.indexOf(layer) : -1
    }
}