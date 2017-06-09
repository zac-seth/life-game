import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { styled } from "styletron-react"
import { toggleLayerVisibility } from "@/store/application/layers/actions"
import LayerType from "@/store/application/layers/layer-types"
import routes from "@/routes"
import Wallpaper from "@/wallpaper"
import { PageFrame } from "@/elements"
import Shortcuts from "@/views/overlays/shortcuts"
import { CreateHabitModal } from "@/views/layers/modals"
import { HabitsWindow, TestWindow } from "@/views/layers/windows"

const AppContainer = styled("div", {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "#2B2B2B"
})

let App = ({ createHabitModal, habitsWindow, testWindow, onToggleShortcut }) => (
    <AppContainer>
        <Wallpaper />
        <PageFrame routes={routes} />
        <Shortcuts snap="bottom-right" onToggle={name => onToggleShortcut(name)} />
        <HabitsWindow settings={habitsWindow}  />
        <TestWindow settings={testWindow} />
        <CreateHabitModal settings={createHabitModal} />
    </AppContainer>
)

const windowSettingsShape = {
    layer: PropTypes.number.isRequired,
    show: PropTypes.bool.isRequired
}

App.propTypes = {
    onToggleShortcut: PropTypes.func.isRequired,
    habitsWindow: PropTypes.shape(windowSettingsShape).isRequired,
    testWindow: PropTypes.shape(windowSettingsShape).isRequired,
    createHabitModal: PropTypes.shape({
        show: PropTypes.bool.isRequired
    }).isRequired
}

const mapStateToProps = (state, props) => ({
    createHabitModal: mapModalSettings(state, "createHabit"),
    habitsWindow: mapWindowSettings(state, "habits"),
    testWindow: mapWindowSettings(state, "test")
})

const mapDispatchToProps = (dispatch, props) => ({
    onToggleShortcut: name => {
        dispatch(toggleLayerVisibility({ type: LayerType.WINDOW, name }))
    }
})

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App

function mapWindowSettings(state, name) {
    const { layers } = state.application
    const show = layers.types.window[name]
    const layer = layers.stack.find(layer => layer.type === LayerType.WINDOW && layer.name === name)

    return {
        show: show,
        layer: layer ? layers.stack.indexOf(layer) : -1
    }
}

function mapModalSettings(state, name) {
    const { layers } = state.application
    const show = layers.types.modal[name]

    return {
        show
    }
}