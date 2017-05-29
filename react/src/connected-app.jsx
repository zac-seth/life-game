import React from "react"
import { connect } from "react-redux"
import App from "./app"
import { setLayerVisibilityAsync } from "@/store/application/layers/actions"
import layerTypes from "@/store/application/layers/layer-types"

const mapStateToProps = (state, ownProps) => ({
    showHabits: state.application.layers.types.window.habits,
    showTest: state.application.layers.types.window.test
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onToggleShortcut: name => {
        dispatch(setLayerVisibilityAsync(layerTypes.WINDOW, name))
    }
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp