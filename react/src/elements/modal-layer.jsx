import React from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"
import { Panel, Text, TitleBar } from "@/elements"

const ModalLayerBackdrop = styled("div", {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 10000,
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
})

const ModalLayerFrame = styled("div", {
    backgroundColor: "#FFF",
    flex: "0 0 480px",
    width: "480px",
    height: "270px"
})

const ModalLayer = ({ children, title, settings }) => {
    if (!settings.show) {
        return null
    }

    return (
        <ModalLayerBackdrop>
            <ModalLayerFrame>
                <TitleBar>
                    <Text header>{title}</Text>
                </TitleBar>
                <Panel>
                    {children}
                </Panel>
            </ModalLayerFrame>
        </ModalLayerBackdrop>
    )
}

ModalLayer.propTypes = {
    title: PropTypes.string.isRequired,
    settings: PropTypes.shape({
        show: PropTypes.bool.isRequired
    }).isRequired
}

export default ModalLayer