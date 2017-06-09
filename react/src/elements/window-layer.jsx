import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { styled } from "styletron-react"
import Draggable from "react-draggable"
import LayerType from "@/store/application/layers/layer-types"
import { bringLayerToTop } from "@/store/application/layers/actions"
import { randomId } from "@/utils/strings"
import { Panel, Text, TitleBar } from "@/elements"

const WindowLayerFrame = styled("div", ({ layer }) => {
    const indent = ( layer + 1 ) * 100

    return {
        backgroundColor: "#FFF",
        flex: "0 0 640px",
        width: "640px",
        height: "360px",
        boxShadow: "3px 3px 3px 0 #BBB",
        position: "absolute",
        top: `50%`,
        left: `50%`,
        marginLeft: "-320px",
        marginTop: "-180px",
        zIndex: 1000 + indent
    }
})

let WindowLayer = ({ children, isTop, settings, title, onLayerActivated }) => {
    if (!settings.show) {
        return null;
    }

    const titleBarId = `window-title-${randomId()}`

    const handleLayerActivation = (...args) => {
        if (!isTop) {
            onLayerActivated()
        }

        return true
    }

    return (
        <Draggable
            axis="both"
            bounds="body"
            handle={`#${titleBarId}`}
            onStart={handleLayerActivation}>
            <WindowLayerFrame layer={settings.layer} onClick={handleLayerActivation}>
                <TitleBar id={titleBarId}>
                    <Text header>{title}</Text>
                </TitleBar>
                {children}
            </WindowLayerFrame>
        </Draggable>
    )
}

WindowLayer.propTypes = {
    isTop: PropTypes.bool.isRequired,
    settings: PropTypes.shape({
        layer: PropTypes.number.isRequired,
        show: PropTypes.bool.isRequired
    }),
    title: PropTypes.string.isRequired
}

const mapStateToProps = (state, { title, name }) => {
    const { layers } = state.application
    const show = layers.types.window[name]
    const layer = layers.stack.find(layer => layer.type === LayerType.WINDOW && layer.name === name)

    return {
        isTop: layer ? layers.stack[layers.stack.length - 1].name === name : false,
        settings: { show, layer: layer ? layers.stack.indexOf(layer) : -1 },
        title
    }
}

const mapDispatchToProps = (dispatch, { name }) => ({
    onLayerActivated: () => dispatch(bringLayerToTop({ name, type: LayerType.WINDOW }))
})

WindowLayer = connect(mapStateToProps, mapDispatchToProps)(WindowLayer)

WindowLayer.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default WindowLayer