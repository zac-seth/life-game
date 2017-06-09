import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { styled } from "styletron-react"
import Draggable from "react-draggable"
import LayerType from "@/store/application/layers/layer-types"
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

let WindowLayer = ({ children, title, settings }) => {
    if (!settings.show) {
        return null;
    }

    const titleBarId = `window-title-${randomId()}`

    return (
        <Draggable
            axis="both"
            bounds="body"
            handle={`#${titleBarId}`}>
            <WindowLayerFrame layer={settings.layer}>
                <TitleBar id={titleBarId}>
                    <Text header>{title}</Text>
                </TitleBar>
                {children}
            </WindowLayerFrame>
        </Draggable>
    )
}

WindowLayer.propTypes = {
    title: PropTypes.string.isRequired,
    settings: PropTypes.shape({
        layer: PropTypes.number.isRequired,
        show: PropTypes.bool.isRequired
    })
}

const mapStateToProps = (state, { title, name }) => {
    const { layers } = state.application
    const show = layers.types.window[name]
    const layer = layers.stack.find(layer => layer.type === LayerType.WINDOW && layer.name === name)

    return {
        title,
        settings: {
            show,
            layer: layer ? layers.stack.indexOf(layer) : -1
        }
    }
}

WindowLayer = connect(mapStateToProps)(WindowLayer)

WindowLayer.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default WindowLayer