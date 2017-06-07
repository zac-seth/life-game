import React from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"
import { Panel, Text, TitleBar } from "@/elements"

const WindowLayerFrame = styled("div", ({ layer }) => {
    const indent = ( layer + 1 ) * 100

    return {
        backgroundColor: "#FFF",
        position: "absolute",
        top: `${indent}px`,
        left: `${indent}px`,
        zIndex: 1000 + indent
    }
})

const ModalWindow = ({ children, title, settings }) => {
    if (!settings.show) {
        return null;
    }

    return (
        <WindowLayerFrame layer={settings.layer} draggable>
            <TitleBar>
                <Text header>{title}</Text>
            </TitleBar>
            <Panel>
                {children}
            </Panel>
        </WindowLayerFrame>
    )
}

ModalWindow.propTypes = {
    title: PropTypes.string.isRequired,
    settings: PropTypes.shape({
        layer: PropTypes.number.isRequired,
        show: PropTypes.bool.isRequired
    })
}

export default ModalWindow