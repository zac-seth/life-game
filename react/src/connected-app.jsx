import React from "react"
import { connect } from "react-redux"
import App from "./app"
import { toggleLayerVisibilityAsync } from "@/store/application/layers/actions"
import layerTypes from "@/store/application/layers/layer-types"

function mapWindowSettings(state, name) {
    const { layers } = state.application
    const show = layers.types.window[name]
    const layer = layers.stack.find(layer => layer.type === layerTypes.WINDOW && layer.name === name)

    return {
        show: show,
        layer: layer ? layers.stack.indexOf(layer) : -1
    }
}

const mapStateToProps = (state, props) => ({
    habitsWindow: mapWindowSettings(state, "habits"),
    testWindow: mapWindowSettings(state, "test")
})

const mapDispatchToProps = (dispatch, props) => ({
    onToggleShortcut: name => {
        dispatch(toggleLayerVisibilityAsync({ type: layerTypes.WINDOW, name }))
    }
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp